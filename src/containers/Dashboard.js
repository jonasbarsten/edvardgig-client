import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { API } from "aws-amplify";

import Licenses from '../components/Licenses';
import Registrations from '../components/Registrations';

import './Dashboard.css';

export default class Dashboard extends Component {

	state = {
		content: 'Heisannert'
	}

	createNote(note) {
	  return API.post("edvardgig", "/notes", {
	    body: note
	  });
	}

	handleSubmit = async event => {

	  try {
	    const attachment = null;

	    await this.createNote({
	      attachment,
	      content: this.state.content
	    });
	  } catch (e) {
	    alert(e);
	  }
	}

	render() {

		return (
			<div className="Dashboard">
				<Button onClick={() => this.handleSubmit()}>GO</Button>
				<Row>
					<Col className="text-right">
						<Button size="lg" onClick={() => this.props.history.push('/settings')}>Settings</Button>
					</Col>
				</Row>
				<br />
				<br />
				<Row>
          <Col> 
            <h2>Licenses</h2>
          </Col>
        </Row>
				<Row>
        	<Col>
						<Licenses />
					</Col>
				</Row>
				<br />
				<br />
				<hr />
				<Row>
          <Col> 
            <h2>Registrations</h2>
          </Col>
        </Row>
        <Row>
        	<Col>
						<Registrations />
					</Col>
				</Row>
			</div>
		);
	}
}