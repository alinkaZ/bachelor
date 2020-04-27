import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './Pagination.css';


export class PaginationRow extends Component{
    render(){
        let url = window.location.href;
        console.log ("pagination", this);
        return(
            <div className='pagination'>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item href={`${url}/QuizeLessonName`}>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item href={`${url}/videoLessonName`}>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item href={`${url}/finish`}>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
            
            </div>
        );
    }
}