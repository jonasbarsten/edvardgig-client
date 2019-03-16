import React, { Fragment, Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Text } from 'tabler-react';
import { Auth } from "aws-amplify";

import { LinkContainer } from "react-router-bootstrap";
import "./NavBar.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      userInfo: null
    };
  }

  componentDidMount () {
    this.getUserInfo();
  }

  getUserInfo = async () => {
    try {
      const userInfo = await Auth.currentUserInfo();
      this.setState({userInfo: userInfo});
    } catch (e) {
      alert(e);
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    const email = (this.state.userInfo && this.state.userInfo.attributes.email || 'Account');

    return (
      <div className="NavBar">
        <Navbar color="dark" dark expand="md">
          <LinkContainer to="/">
            <NavbarBrand>Edvard Gig</NavbarBrand>
          </LinkContainer>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              {this.props.auth
                ? <Fragment>
                    <NavItem>
                      <LinkContainer to="/dashboard">
                        <NavLink>{email}</NavLink>
                      </LinkContainer>
                    </NavItem>
                    <NavItem>
                      <NavLink className="hover" onClick={this.props.logout}>Logout</NavLink>
                    </NavItem>
                  </Fragment>
                : <Fragment>
                    <NavItem>
                      <LinkContainer to="/login">
                        <NavLink>Login</NavLink>
                      </LinkContainer>
                    </NavItem>
                  </Fragment>
              }

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

