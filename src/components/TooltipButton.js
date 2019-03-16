import React from 'react';
import { Button, Tooltip } from 'reactstrap';
import { Icon } from 'tabler-react';
import uuid from 'uuid/v4';

export default class TooltipButton extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
      id: uuid()
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {

    const color = (this.props.color || "");
    const text = (this.props.text || "");
    const icon = (<Icon name={this.props.icon} /> || "");
    const tooltipContent = (this.props.tooltip || "");
    const placement = (this.props.placement || "auto");

    return (
      <React.Fragment>
        <Button color={color} id={'Tooltip-' + this.state.id}>
          {icon} {text}
        </Button>
        <Tooltip placement={placement} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.state.id} toggle={this.toggle}>
          {tooltipContent}
        </Tooltip>
      </React.Fragment>
    );
  }
}