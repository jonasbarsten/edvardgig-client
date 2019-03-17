import React, { Component } from 'react';
import { Table, Text, Progress, Dropdown, Icon, Button } from 'tabler-react';
import { LinkContainer } from "react-router-bootstrap";

import TooltipButton from './TooltipButton';

export default class LicenseItem extends Component {
  render () {

    const license = (this.props.license || null);
    const type = (license && license.type);
    const daysLeft = (type === "trial" && license.daysLeft) ? license.daysLeft : 0;
    const plural = (daysLeft && daysLeft === 1) ? "" : "s";
    const progress = daysLeft ? (100 - ((daysLeft / 30) * 100)) : 100;
    const color = (daysLeft === 0) ? "red" : "yellow";
    const name = (license && license.product);

    let trialProgress = (type === "trial") ?
      <React.Fragment>
        <div className="clearfix">
          <div className="float-right">
            <Text.Small muted>
              {daysLeft ? daysLeft.toString() : "0"} day{plural} left
            </Text.Small>
          </div>
        </div>
        <Progress size="xs">
          <Progress.Bar color={color} width={progress} />
        </Progress>
      </React.Fragment> : null;

    // if (type === "permanent") {
    //   trialProgress =
    //     <React.Fragment>
    //       <div className="clearfix">
    //         <div className="float-right">
    //           <Text.Small muted>
    //             permanent
    //           </Text.Small>
    //         </div>
    //       </div>
    //       <Progress size="xs">
    //         <Progress.Bar color="green" width={100} />
    //       </Progress>
    //     </React.Fragment>;
    // }

    return (
      <Table.Row>
        <Table.Col alignContent="left">
          <Text>{name}</Text>
        </Table.Col>
        <Table.Col>
          <Text size="sm" muted>
            {type ? `${type} license` : ''}
          </Text>
        </Table.Col>
        <Table.Col>
          {trialProgress}
        </Table.Col>
        <Table.Col alignContent="center">
          <Text size="sm" muted>
            Mar 19, 2018
          </Text>
        </Table.Col>
        <Table.Col alignContent="right">
          {(type === "permanent") ? 
            <Button icon="arrow-up-circle"></Button> :
            <LinkContainer to={`/pay?product=${name}`}>
              <Button icon="shopping-cart"></Button>
            </LinkContainer>
          }
          <Button icon="download"></Button>
        </Table.Col>
      </Table.Row>
    );
  }
}