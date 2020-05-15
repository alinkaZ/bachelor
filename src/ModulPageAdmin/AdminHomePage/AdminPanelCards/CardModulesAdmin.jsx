import React, { Component } from "react";

import { CardAdmin } from "./CardAdmin";

import { apiService } from "../../../utils/API/apiService";
import "./CardModules.css";
import Col from "react-bootstrap/Col";

export class CardModulesAdminDelete extends Component {
  constructor() {
    super();
    this.state = {
      cardData: [],
    };
  }

  componentDidMount() {
    //fetch("https://wixapi.azurewebsites.net/api/Modules").then(x=>{return x.json()}).then (x=>{this.setState({cardData:x})})
    apiService.modules().then(
      (data) => {
        this.setState({ cardData: data });
      },
      (error) => {
        //setSubmitting(false);
        //setStatus(error);
      }
    );
  }
  updateList=(event)=>{
    apiService.modules().then(
      (data) => {
        this.setState({ cardData: data });
      },
      (error) => {
      }
    );
  }
  render() {
    return (
      <>
      
        <div className="cards">
          {this.state.cardData.map((x, y) => {
            
            return <CardAdmin key={x.moduleID} cardData={x} onDelete={this.updateList}/>;
         
          })}
        </div>
      </>
    );
  }
}
