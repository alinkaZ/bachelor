import React, { Component } from "react";
import "./Header.css";

export class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
