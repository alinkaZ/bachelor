import React, { Component } from 'react';
import { Pagination, Container } from 'reactstrap';
import { ButtonsPrevNext } from '../ModulDetailPageText/ButtonsPrevNext';
import { CommentBox } from '../ModulDetailPageText/CommentBox';
import { PaginationRow } from '../ModulDetailPageText/Pagination';
import { Video } from './Video';
import { Header } from '../ModulDetailPageText/Header';

export class ModulDetailPageVideo extends Component{
    render(){
        return(
            <Container>
                <PaginationRow/>
                <Header/>
                <Video/>
                <ButtonsPrevNext/>
                <CommentBox/>
            </Container>
        );
    }
}