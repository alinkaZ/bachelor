import React, { UseState, useEffect, Component } from "react";
import Pagination from "react-bootstrap/Pagination";
import "./Pagination.css";
import { apiService } from "../../utils/API/apiService";

export class PaginationRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modulId: "",
      lessonId: "",
      lessons: [],
      pageCount: 0,
      pageNumber: 1,
      currentLesson: {},
    };
  }
  componentDidMount() {
    this.setState({
      modulId: this.props.data.moduleID,
      lessonId: this.props.data.lessonID,
    });
    console.log("pagination modulid", this.props.data.moduleID);
    apiService.lessons(this.props.data.moduleID).then((data) => {
      console.log("all lessons", data);
      this.setState({
        lessons: data,
        currentLesson: data[0],
        pageCount: data.length,
      });
    });
  }

  render() {
    return (
      <div className="pagination">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          {this.state.lessons.map((index, v) => {
            return <Pagination.Item>{index}</Pagination.Item>;
          })}

          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    );
  }
}
