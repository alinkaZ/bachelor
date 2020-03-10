import React, { Component } from 'react';
import { Pagination, Container } from 'reactstrap';
import { TextBox } from './TextBox';
import { ButtonsPrevNext } from './ButtonsPrevNext';
import { CommentBox } from './CommentBox';
import { PaginationRow } from './Pagination';
import { Header } from './Header';

export class ModulDetailPageText extends Component{
    render(){
        return(
            <Container>
                <PaginationRow/>
                <Header/>
                <TextBox/>
                <ButtonsPrevNext/>
                <CommentBox/>
            </Container>
        );
    }
}