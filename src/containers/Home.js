import React, { Component } from "react";
import { API } from "aws-amplify";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { ListGroup, ListGroupItem, Row, Col } from "reactstrap";
// import { ProductCard } from 'react-ui-cards';
import { PricingCard, Card, Media, Avatar, Table, Icon } from 'tabler-react';

import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      notes: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      const notes = await this.notes();
      this.setState({ notes });
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  notes() {
    return API.get("notes", "/notes");
  }

  renderNotesList(notes) {
    return [{}].concat(notes).map(
      (note, i) =>
        i !== 0
          ? <LinkContainer
              key={note.noteId}
              to={`/notes/${note.noteId}`}
            >
              <ListGroupItem header={note.content.trim().split("\n")[0]}>
                {"Created: " + new Date(note.createdAt).toLocaleString()}
              </ListGroupItem>
            </LinkContainer>
          : <LinkContainer
              key="new"
              to="/notes/new"
            >
              <ListGroupItem>
                <h4>
                  <b>{"\uFF0B"}</b> Create a new note
                </h4>
              </ListGroupItem>
            </LinkContainer>
    );
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>Edvard Gig</h1>
        <p>Tools for live musicians</p>
        <div>
          <Link to="/login" className="btn btn-info btn-lg">
            Login
          </Link>
        </div>
        <br />
        <hr />
        <Row>
          <Col> 
            <h1>Used by</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 4, offset: 4 }}>
            <p>Alan Walker</p>
            <p>Highasakite</p>
            <p>Karpe</p>
            <p>Julie Bergan</p>
            <p>K-391</p>
          </Col>
        </Row>
        <hr />
        <br />
        <Row>
          <Col> 
            <h1>Software</h1>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col sm="6" lg="4">
          <PricingCard>
              <PricingCard.Category>{"$99"}</PricingCard.Category>
              <PricingCard.Price>{"SYNC"} </PricingCard.Price>
              <PricingCard.AttributeList>
                  <PricingCard.AttributeItem>
                      <strong>Free </strong>
                                {"30 days trial"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem>
                    {"Register on "}
                       <strong>5 </strong>
                                 {"machines"}
                    </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"Sync timeline"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"Sync BPM"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"Sync start/stop"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                 {"Sync time signature"}
                     </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Automatic fallover redundancy"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Manual offset adjustment"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Choose network interface"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Network jitter compensation"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Extremely low CPU/RAM usage"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Works across Mac and Windows"}
                    </PricingCard.AttributeItem>
                    <br />
                    <PricingCard.AttributeItem>{"Requires Ableton Live and Max for Live"}</PricingCard.AttributeItem>
                    <PricingCard.AttributeItem>{"Requires ethernet connection between computers"}</PricingCard.AttributeItem>
                    <PricingCard.AttributeItem>{"Requires internet connection in trial period"}</PricingCard.AttributeItem>
              </PricingCard.AttributeList>
              <PricingCard.Button>{"Coming soon"} </PricingCard.Button>
          </PricingCard>
          </Col>
          <Col sm="6" lg="4">
          <PricingCard>
              <PricingCard.Category>{"$29"}</PricingCard.Category>
              <PricingCard.Price>{"SPD-SX"} </PricingCard.Price>
              <PricingCard.AttributeList>
                  <PricingCard.AttributeItem>
                      <strong>Free </strong>
                                {"30 days trial"}
                   </PricingCard.AttributeItem>

                   <PricingCard.AttributeItem hasIcon available>
                                {"Seamless integration with Ableton Live"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"Use any SPD-SX with initial kit"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"Support for multiple SPD-SXs"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"USB or MIDI"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Change kits"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Control kit volume"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Control sample volume"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Control sample velocity"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Extremely low CPU/RAM usage"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Supports both Mac and Windows"}
                    </PricingCard.AttributeItem>
                    <br />
                    <PricingCard.AttributeItem>{"Requires Ableton Live and Max for Live"}</PricingCard.AttributeItem>
                    <PricingCard.AttributeItem>{"Requires internet connection in trial period"}</PricingCard.AttributeItem>
              </PricingCard.AttributeList>
              <PricingCard.Button>{"Coming soon"}</PricingCard.Button>
          </PricingCard>
          </Col>
          <Col sm="6" lg="4">
          <PricingCard>
              <PricingCard.Category>{"$49"}</PricingCard.Category>
              <PricingCard.Price>{"MIDI"} </PricingCard.Price>
              <PricingCard.AttributeList>
                  <PricingCard.AttributeItem>
                      <strong>Free </strong>
                                {"30 days trial"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"Send MIDI to other computers"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"Receive MIDI from other computers"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"Send MIDI to multiple computers"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Receive MIDI from multiple computers"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Map incomming MIDI to any mappable parameters"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Extremely low CPU/RAM usage"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Works across Mac and Windows"}
                    </PricingCard.AttributeItem>
                    <br />
                    <PricingCard.AttributeItem>{"Requires Ableton Live and Max for Live"}</PricingCard.AttributeItem>
                    <PricingCard.AttributeItem>{"Requires ethernet connection between computers"}</PricingCard.AttributeItem>
                    <PricingCard.AttributeItem>{"Requires internet connection in trial period"}</PricingCard.AttributeItem>
              </PricingCard.AttributeList>
              <PricingCard.Button>{"Coming soon"}</PricingCard.Button>
          </PricingCard>
          </Col>
          <Col sm="6" lg="4">
          <PricingCard>
              <PricingCard.Category>{"$29"}</PricingCard.Category>
              <PricingCard.Price>{"dLive"} </PricingCard.Price>
              <PricingCard.AttributeList>
                  <PricingCard.AttributeItem>
                      <strong>Free </strong>
                                {"30 days trial"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem>
                    {"For dLive C-series mixers"}
                    </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"Send MIDI notes when changing scenes"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"Standalone application"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"Exposes virtual MIDI port"}
                   </PricingCard.AttributeItem>
                    <br />
                    <PricingCard.AttributeItem>{"Only for Mac"}</PricingCard.AttributeItem>
                    <PricingCard.AttributeItem>{"Requires internet connection in trial period"}</PricingCard.AttributeItem>
              </PricingCard.AttributeList>
              <PricingCard.Button>{"Coming soon"}</PricingCard.Button>
          </PricingCard>
          </Col>
          <Col sm="6" lg="4">
          <PricingCard>
              <PricingCard.Category>{"$29"}</PricingCard.Category>
              <PricingCard.Price>{"Program Change"} </PricingCard.Price>
              <PricingCard.AttributeList>
                  <PricingCard.AttributeItem>
                      <strong>Free </strong>
                                {"30 days trial"}
                   </PricingCard.AttributeItem>

                   <PricingCard.AttributeItem hasIcon available>
                                {"Seamless integration with Ableton Live"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"Use any SPD-SX with initial kit"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"Support for multiple SPD-SXs"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"USB or MIDI"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Change kits"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Control kit volume"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Control sample volume"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Control sample velocity"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Extremely low CPU/RAM usage"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Supports both Mac and Windows"}
                    </PricingCard.AttributeItem>
                    <br />
                    <PricingCard.AttributeItem>{"Requires Ableton Live and Max for Live"}</PricingCard.AttributeItem>
                    <PricingCard.AttributeItem>{"Requires internet connection in trial period"}</PricingCard.AttributeItem>
              </PricingCard.AttributeList>
              <PricingCard.Button>{"Coming soon"}</PricingCard.Button>
          </PricingCard>
          </Col>
          <Col sm="6" lg="4">
          <PricingCard>
              <PricingCard.Category>{"$49"}</PricingCard.Category>
              <PricingCard.Price>{"Video"} </PricingCard.Price>
              <PricingCard.AttributeList>
                  <PricingCard.AttributeItem>
                      <strong>Free </strong>
                                {"30 days trial"}
                   </PricingCard.AttributeItem>

                   <PricingCard.AttributeItem hasIcon available>
                                {"Seamless integration with Ableton Live"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"Use any SPD-SX with initial kit"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"Support for multiple SPD-SXs"}
                   </PricingCard.AttributeItem>
                   <PricingCard.AttributeItem hasIcon available>
                                {"USB or MIDI"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Change kits"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Control kit volume"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Control sample volume"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Control sample velocity"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Extremely low CPU/RAM usage"}
                    </PricingCard.AttributeItem>
                    <PricingCard.AttributeItem hasIcon available>
                                {"Supports both Mac and Windows"}
                    </PricingCard.AttributeItem>
                    <br />
                    <PricingCard.AttributeItem>{"Requires Ableton Live and Max for Live"}</PricingCard.AttributeItem>
                    <PricingCard.AttributeItem>{"Requires internet connection in trial period"}</PricingCard.AttributeItem>
              </PricingCard.AttributeList>
              <PricingCard.Button>{"Coming soon"}</PricingCard.Button>
          </PricingCard>
          </Col>
        </Row>

      </div>
    );
  }

  renderNotes() {
    return (
      <div className="notes">
        <ListGroup>
          {!this.state.isLoading && this.renderNotesList(this.state.notes)}
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}
      </div>
    );
  }
}
