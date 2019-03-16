import React, { Component } from 'react';
import { Table } from 'tabler-react';

import RegistrationItem from './RegistrationItem';

export default class Registrations extends Component {
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
			      <Table.ColHeader>Machine</Table.ColHeader>
			      <Table.ColHeader>Registered</Table.ColHeader>
			      <Table.ColHeader alignContent="right">License file</Table.ColHeader>
			    </Table.Row>
			  </Table.Header>
			  <Table.Body>
			  	<RegistrationItem />
			  	<RegistrationItem />
			  	<RegistrationItem />
			  	<RegistrationItem />
			  	<RegistrationItem />
			  	<RegistrationItem />
			  	<RegistrationItem />
			  	<RegistrationItem />
			  </Table.Body>
			</Table>
		);
	}
}