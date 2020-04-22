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
    useRouteMatch
  } from "react-router-dom";

export function NewCard () {
let { path, url } = useRouteMatch();
  {
    
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.fineartamerica.com/images-medium-large-5/abstract-art-original-whimsical-modern-landscape-painting-bursting-forth-by-madart-megan-duncanson.jpg"
          />
          <Card.Body>
            <div class="container">
              <div class="row">
                <div class="col">
                  <p id="lector"> Lector </p>
                </div>
                <div class="col">
                  <p id="time"> Time </p>
                </div>
              </div>
            </div>

            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className="container-button">
              <Button variant="primary btn-lg" href={`${url}/1`}>
                Learn more
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Switch>
            
        </Switch>
      </>
    );
  }
}
