import React, { Component } from "react";
import { InfoMainPage } from "./InfoMainPage";
import { NewCard } from "./NewCard";
import { cardData } from "../Data/CardData";
import { apiService } from "../utils/API/apiService";

export class CardModules extends Component {
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
  render() {
    return (
      <>
        <InfoMainPage />
        <div className="cards">
          {this.state.cardData.map((x, y) => {
            return <NewCard cardData={x} />;
          })}
        </div>
      </>
    );
  }
}
