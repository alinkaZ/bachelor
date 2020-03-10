import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './Pagination.css';


export class PaginationRow extends Component{
    render(){
        return(
            <div className='pagination'>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item href='/video'>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item href='/quiz'>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item href='/finish'>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
            
            </div>
        );
    }
}