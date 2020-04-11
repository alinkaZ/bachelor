import React, { Component } from 'react';
import { Pagination, Container } from 'reactstrap';
import { ButtonsPrevNext } from '../ModulDetailPageText/ButtonsPrevNext';
import { CommentBox } from '../ModulDetailPageText/CommentBox';
import { PaginationRow } from '../ModulDetailPageText/Pagination';
import { Header } from '../ModulDetailPageText/Header';
import { Question } from './Question';
import { Breadcrumbs } from '../ModulMainPage/Breadcrumbs';

export class ModulDetailPageQuiz extends Component{
    render(){
        return(
            <Container>
                <Breadcrumbs/>
                <PaginationRow/>
                <Header/>
                <Question/>
                <Question/>
                <Question/>
                <ButtonsPrevNext/>
                <CommentBox/>
            </Container>
        );
    }
}