import React, { UseState, useEffect, Component } from "react";
import Pagination from "react-bootstrap/Pagination";
import "./Pagination.css";
import { apiService } from "../../utils/API/apiService";

export class PaginationRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: props.pageCount,
      pageIndex: props.pageIndex+1,
    };
  }
  componentWillReceiveProps({ pageCount, pageIndex }) {
    //debugger;
    this.setState({ pageCount: pageCount,
      pageIndex: pageIndex+1});
  }
  toTheNextPage=()=>{
    if (this.props.toNextPage) {
        this.props.toNextPage();
      }
}
toThePreviousPage=()=>{
    if (this.props.toPreviousPage) {
        this.props.toPreviousPage();
    }
}
toPage=(selectedIndex)=>{
  console.log("selectedIndex",selectedIndex);
  if (this.props.toPage){
    this.props.toPage(selectedIndex);
  }
}
  render() {
    console.log("pagination", this.state)
    let items = [];
    for (let number = 1; number <= this.state.pageCount; number++) {
      items.push(
        <Pagination.Item key={number} active={number === this.state.pageIndex} onClick={() => this.toPage(number)}>
          {number}
        </Pagination.Item>
      );
    }
    return (
      <div className="pagination">
        <Pagination>
          <Pagination.First onClick={() => this.toPage(1)}/>
          <Pagination.Prev onClick={this.toThePreviousPage}/>

          {items}
          <Pagination.Next onClick={this.toTheNextPage}/>
          <Pagination.Last onClick={() => this.toPage(this.state.pageCount)}/>
        </Pagination>
      </div>
    );
  }
}
