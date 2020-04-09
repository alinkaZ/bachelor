import React, { Component } from 'react';
import { Pagination, Container } from 'reactstrap';
import { ButtonsPrevNext } from '../ModulMainPage/ModulDetailPageText/ButtonsPrevNext';
import { CommentBox } from '../ModulMainPage/ModulDetailPageText/CommentBox';
import { PaginationRow } from '../ModulMainPage/ModulDetailPageText/Pagination';
import { Header } from '../ModulMainPage/ModulDetailPageText/Header';
import { Question } from './Question';

export class ModulDetailPageQuiz extends Component{
    render(){
        return(
            <Container>
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