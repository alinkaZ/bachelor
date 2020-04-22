import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "./Schedule.css";

export class Schedule extends Component {
  render() {
    return (
      <Table responsive variant="dark">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {this.props.dataSchedule.map((item) => {
            return (
              <tr>
                <td>{item.number}</td>
                <td>{item.name}</td>
                <td>{item.duration}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
