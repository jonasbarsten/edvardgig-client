import React, { Component } from 'react';
import { Table, Text, Progress, Dropdown, Icon, Button } from 'tabler-react';

import TooltipButton from './TooltipButton';

export default class RegistrationItem extends Component {
  render () {
    return (
      <Table.Row>
        <Table.Col alignContent="left">
          <Text>SYNC</Text>
        </Table.Col>
        <Table.Col>
          <div>MacBook Pro</div>
          <Text size="sm" muted>
            Machine ID: xxxxxxxxxxxx
          </Text>
        </Table.Col>
        <Table.Col>
          <Text size="sm" muted>
            Mar 19, 2018
          </Text>
        </Table.Col>
        <Table.Col alignContent="center">
          <Button icon="file-text"></Button>
        </Table.Col>
      </Table.Row>
    );
  }
}