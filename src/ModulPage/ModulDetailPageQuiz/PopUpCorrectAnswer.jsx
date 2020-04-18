import React, { Component } from "react";
import Question from "../../Assets/question.png";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Right answer</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );
  
  const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <img style={{width:"20px"}} src={Question} />
    </OverlayTrigger>
  );


export class PopUpCorrectAnswer extends Component {
  render() {
    return(
        <Example />
      );
    
  }
}
