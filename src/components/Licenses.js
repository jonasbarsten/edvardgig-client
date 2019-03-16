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
			      <Table.ColHeader>Owner</Table.ColHeader>
			      <Table.ColHeader>Trial</Table.ColHeader>
			      <Table.ColHeader alignContent="center">Bought</Table.ColHeader>
			      <Table.ColHeader alignContent="right">Download</Table.ColHeader>
			    </Table.Row>
			  </Table.Header>
			  <Table.Body>
			  	<LicenseItem license={{type: 'full'}} />
			  	<LicenseItem license={{type: 'trial', daysLeft: 1}} />
			  	<LicenseItem />
			  	<LicenseItem license={{type: 'trial', daysLeft: 0}} />
			  	<LicenseItem />
			  	<LicenseItem />
			  </Table.Body>
			</Table>
		);
	}
}