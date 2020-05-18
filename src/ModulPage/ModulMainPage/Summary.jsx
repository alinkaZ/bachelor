import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "../ModulMainPage/Summary.css";

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
            <td>{this.props.dataSummary.institution}</td>
          </tr>
          <tr>
            <td>Subject</td>
            <td>{this.props.dataSummary.subject}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{this.props.dataSummary.price==0? "free":this.props.dataSummary.price}</td>
          </tr>
          <tr>
            <td>Language</td>
            <td>{this.props.dataSummary.language}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
