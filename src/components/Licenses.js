import React, { Component } from 'react';
import { API } from "aws-amplify";
import { Table } from 'tabler-react';
import { Spinner } from 'reactstrap';
import config from '../config';

import LicenseItem from './LicenseItem';

export default class Licenses extends Component {

	constructor(props) {
	  super(props);

	  this.state = {
	    isLoading: true,
	    userLicenses: []
	  };
	}

	async componentDidMount() {
	  try {
	    const userLicenses = await this.getLicenses();
	    this.setState({ userLicenses });
	  } catch (e) {
	    alert(e);
	  }
	  this.setState({ isLoading: false });
	}

	getLicenses() {
	  return API.get("edvardgig", "/licenses");
	}


	render () {

		console.log(this.state);

		if (this.state.isLoading) {
			return (
				<div>
					<Spinner type="grow" color="dark" />
				</div>
			);
		}

		return (
			<Table
			  responsive
			  hasOutline
			  verticalAlign="center"
			  cards
			  className="text-nowrap"
			>
			  <Table.Header>
			    <Table.Row>
			      <Table.ColHeader alignContent="left">Product</Table.ColHeader>
			      <Table.ColHeader>Type</Table.ColHeader>
			      <Table.ColHeader>Status</Table.ColHeader>
			      <Table.ColHeader alignContent="center">Bought</Table.ColHeader>
			      <Table.ColHeader alignContent="right">Actions</Table.ColHeader>
			    </Table.Row>
			  </Table.Header>
			  <Table.Body>
			  	<LicenseItem license={{product: "SYNC", type: 'permanent'}} />
			  	<LicenseItem license={{product: "SPD-SX", type: 'trial', daysLeft: 1}} />
			  	<LicenseItem license={{product: "dLive", type: 'trial', daysLeft: 10}} />
			  	<LicenseItem license={{product: "VIDEO"}} />
			  	<LicenseItem license={{product: "Program Change"}} />
			  	<LicenseItem license={{product: "MIDI", type: 'permanent'}} />
			  </Table.Body>
			</Table>
		);
	}
}