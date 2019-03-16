import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async event => {
    await Auth.signOut();
    this.userHasAuthenticated(false);
    this.props.history.push("/");
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <NavBar auth={this.state.isAuthenticated} logout={() => {this.handleLogout()}}/>
        <Routes childProps={childProps} />
      </div>
    );

    // return (

    //   <Navbar fluid collapseOnSelect>
    //     <Navbar.Header>
    //       <Navbar.Brand>
    //         <Link to="/">Edvard Gig</Link>
    //       </Navbar.Brand>
    //       <Navbar.Toggle />
    //     </Navbar.Header>
    //     <Navbar.Collapse>
    //       <Nav pullRight>
    //         {this.state.isAuthenticated
    //           ? <Fragment>
    //               <LinkContainer to="/settings">
    //                 <NavItem>Settings</NavItem>
    //               </LinkContainer>
    //               <NavItem onClick={this.handleLogout}>Log Out</NavItem>
    //             </Fragment>
    //           : <Fragment>
    //               <LinkContainer to="/signup">
    //                 <NavItem>Sign Up</NavItem>
    //               </LinkContainer>
    //               <LinkContainer to="/login">
    //                 <NavItem>Sign In</NavItem>
    //               </LinkContainer>
    //             </Fragment>
    //         }
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar>

    // );
  }
}

export default withRouter(App);
