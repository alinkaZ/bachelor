import React, { Component } from "react";
import { Container } from "reactstrap";
import { HomeNavbar } from "../Layout/HomeNavbar";
import { Footer } from "./Footer";
import "./Layout.css";

export class Layout extends Component {
  render() {
    return (
      <>
        <HomeNavbar />
        <Container id="mainContainer">{this.props.children}</Container>
        <Footer />
      </>
    );
  }
}
