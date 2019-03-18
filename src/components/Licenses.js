import React, { Component } from 'react';
import { API } from "aws-amplify";
import { Table } from 'tabler-react';
import { Spinner } from 'reactstrap';
import config from '../config';

import LicenseItem from './LicenseItem';

const products = config.products;
let productArray = [];

products.map((product) => {
  if (product.visible) {
    productArray.push(product.name);
  }
});

export default class Licenses extends Component {

	state = {
		isLoading: true,
	  userLicenses: []
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

		if (this.state.isLoading) {
			return (
				<div>
					<Spinner type="grow" color="dark" />
				</div>
			);
		}

		const licenses = this.state.userLicenses;

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

			  	{
			  		productArray.map((product, count) => {
			  			let type = "no";
			  			let daysLeft = 0;
			  			let currentNumberOfRegistrations = 0;
			  			let maxRegistrations = 0;

			  			for (var i = 0; i < licenses.length; i++) {
			  				if (licenses[i].product === product) {
			  					type = licenses[i].type;
			  					daysLeft = (licenses[i].daysLeft || 0);
			  					currentNumberOfRegistrations = (licenses[i].currentNumberOfRegistrations || 0);
			  					maxRegistrations = (licenses[i].maxRegistrations || 0);
			  					break;
			  				}
			  			}

			  			return (
			  				<LicenseItem key={count} license={{product, type, daysLeft, currentNumberOfRegistrations, maxRegistrations}} />
			  			);
			  		})
			  	}

			  </Table.Body>
			</Table>
		);
	}
}