import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "../ModulMainPage/Summary.css";

//<button type="button" class="btn btn-secondary btn-lg">Large button</button>

export class Summary extends Component {
  render() {
    console.log("propsSummary", this.props);
    return (
      <Table responsive>
        <tbody className="summary">
          <tr>
            <td>Duration</td>
            <td>{this.props.dataSummary.duration} min</td>
          </tr>
          <tr>
            <td>Institution</td>
            <td>OsloMet</td>
          </tr>
          <tr>
            <td>Subject</td>
            <td>Social welfare</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>Free</td>
          </tr>
          <tr>
            <td>Language</td>
            <td>English</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
