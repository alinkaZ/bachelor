import React, { Component } from "react";
import "./CardAdmin.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { apiService } from "../../../utils/API/apiService";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export class CardAdmin extends Component {
  url = "";
  constructor(props) {
    super(props);
    //let { path, url } = useRouteMatch();
    let { cardData } = this.props;
    //console.log(this.props, item);
    this.state = cardData;
    console.log(props);
  }

  deleteModul = (event) => {
    apiService.deleteModuleByID(this.state.moduleID).then((x) => {
      this.props.onDelete(x);
      console.log(x);
    });
  };

  render() {
    let item = this.state;
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={item.picture}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://storage.googleapis.com/snl-no-media/media/144223/standard_sosialdemokrati.jpg";
            }}
          />
          <Card.Body>
            <div class="container">
              <div class="row">
                <div class="col">
          <p id="lector"> {/*{item.lecturer}*/} Erika Gubrium </p>
                </div>
                <div class="col">
                  <p id="time"> {/*{item.duration}*/} 60 </p>
                </div>
              </div>
            </div>

            <Card.Text>{item.title}</Card.Text>
            <div className="container-button">
              <Button
                variant="primary btn-lg"
                href={`${this.url}/modules/${item.moduleID}/edit`}
                data-id={item.modulId}
              >
                Edit
              </Button>
              <br />
              <Button
                variant="primary btn-lg"
                data-id={item.modulId}
                onClick={this.deleteModul}
              >
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}
