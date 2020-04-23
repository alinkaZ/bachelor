import React, { Component } from "react";
import "./NewCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ModulForm } from "../ModulPage/ModulMainPage/ModulForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export function NewCard(props) {
  let { path, url } = useRouteMatch();
  let {cardData}=props;
  let item = cardData;
  console.log (props, item);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        
         
              <Card.Img
                variant="top"
                src= {item.image} />
              <Card.Body>
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <p id="lector"> {item.lecturer} </p>
                    </div>
                    <div class="col">
                      <p id="time"> {item.timing} </p>
                    </div>
                  </div>
                </div>

                <Card.Text>{item.name}</Card.Text>
                <div className="container-button">
                  <Button variant="primary btn-lg" href={`${url}/1`}>
                    Learn more
                  </Button>
                </div>
              </Card.Body>
            
        
      </Card>
    </>
      );
    
  
}
