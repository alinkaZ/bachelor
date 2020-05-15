import React, { Component } from "react";
import "./NewCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export class NewCard extends Component {

  url = "";
  constructor(props) {
    super(props);
    //let { path, url } = useRouteMatch();
    let { cardData } = this.props;
    //console.log(this.props, item);
    this.state = cardData;
    console.log (props);
    }

    render() {
      let item = this.state;
  return (
    <>
      <Card style={{ width: "18rem" }}>
        
         {/*if (item.picture==null){
           <Card.Img
           variant="top"
           src= {item.picture}/>//take default picture
        
         }else{
              <Card.Img
                variant="top"
                src= {item.picture}/>
              };*/}
                <Card.Img
                variant="top"
                src= {item.picture}/>
         <Card.Body>
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <p id="lector"> {item.lecturer} </p>
                    </div>
                    <div class="col">
                      <p id="time"> {item.duration} </p>
                    </div>
                  </div>
                </div>

                <Card.Text>{item.title}</Card.Text>
                <div className="container-button">
                  <Button variant="primary btn-lg" href={`${this.url}/${item.moduleID}`}>
                    Learn more
                  </Button>
                </div>
              </Card.Body>
            
        
      </Card>
    </>
      );
    
  
}}
