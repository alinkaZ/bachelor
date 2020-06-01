import React, { UseState, useEffect, Component } from "react";
import Pagination from "react-bootstrap/Pagination";
import "./Pagination.css";
import { apiService } from "../../utils/API/apiService";

export class PaginationRow extends Component {
  render() {
    let url = window.location.href;
    console.log("pagination", this);

    let pageNumber = [];
    apiService.lessons("22").then((x) => {
      pageNumber = x;
      console.log("this is all lessons", pageNumber);
    });
    //const paginate = (pageNumber) => setCurrentPage(pageNumber);

    for (let i = 1; i <= pageNumber.length - 1; i++) {
      pageNumber.push(i);
      console.log("page number", i);
    }

    return (
      <div className="pagination">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          {pageNumber.map((i) => (
            <Pagination.Item>
              {" "}
              {/*href={`${url}/QuizeLessonName`*/} }{i}
            </Pagination.Item>
          ))}

          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    );
  }
}
