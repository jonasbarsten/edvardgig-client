import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

import Licenses from '../components/Licenses';
import Registrations from '../components/Registrations';

import './Dashboard.css';

export default class Dashboard extends Component {
	render() {
		return (
			<div className="Dashboard">
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