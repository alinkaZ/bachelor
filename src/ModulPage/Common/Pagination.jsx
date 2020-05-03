import React, { UseState, useEffect, Component } from "react";
import Pagination from "react-bootstrap/Pagination";
import "./Pagination.css";

export class PaginationRow extends Component {
  render() {
    let url = window.location.href;
    console.log("pagination", this);

    const pageNumber = [];
    //onst paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    for (let i = 1; i <= pageNumber.length - 1; i++) {
      pageNumber.push(i);
    }

    return (
      <div className="pagination">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          {pageNumber.map((number) => (
            <Pagination.Item href={`${url}/QuizeLessonName`}>
              {number}
            </Pagination.Item>
          ))}

          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    );
  }
}
