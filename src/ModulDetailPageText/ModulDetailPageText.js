import React, { Component } from 'react';
import { Pagination, Container } from 'reactstrap';
import { TextBox } from './TextBox';
import { ButtonsPrevNext } from './ButtonsPrevNext';
import { CommentBox } from './CommentBox';
import { PaginationRow } from './Pagination';

export class ModulDetailPage extends Component{
    render(){
        return(
            <Container>
                <PaginationRow/>
                <TextBox/>
                <ButtonsPrevNext/>
                <CommentBox/>
            </Container>
        );
    }
}