import React, { Component, useState, useRef } from "react";
import Question from "../../../Assets/question.png";
import Popover from 'react-bootstrap/Popover';
import Overlay from 'react-bootstrap/Overlay';



function Example(props) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  let {text}=props;
  console.log(text);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      
      <img onClick={handleClick} style={{width:"20px"}} src={Question} />
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3">{text.rightAnswer}</Popover.Title>
          <Popover.Content>
            {text.explanation}
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
}

export class PopUpCorrectAnswer extends Component {
  render() {
    return(
        <Example text={this.props.dataAnswers}/>
      );
    
  }
}
