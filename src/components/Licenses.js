import React, { Component } from 'react';
import { Table } from 'tabler-react';

import LicenseItem from './LicenseItem';

export default class Licenses extends Component {
	render () {
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