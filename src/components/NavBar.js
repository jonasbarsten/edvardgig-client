import React, { Fragment, Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import { LinkContainer } from "react-router-bootstrap";
import "./NavBar.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="NavBar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Edvard Gig</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              {this.props.auth
                ? <Fragment>
                    <NavItem>
                      <LinkContainer to="/settings">
                        <NavLink>Settings</NavLink>
                      </LinkContainer>
                    </NavItem>
                    <NavItem>
                      <NavLink className="hover" onClick={this.props.logout}>Log Out</NavLink>
                    </NavItem>
                  </Fragment>
                : <Fragment>
                    <NavItem>
                      <LinkContainer to="/signup">
                        <NavLink>Sign Up</NavLink>
                      </LinkContainer>
                    </NavItem>
                    <NavItem>
                      <LinkContainer to="/login">
                        <NavLink>Sign In</NavLink>
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

