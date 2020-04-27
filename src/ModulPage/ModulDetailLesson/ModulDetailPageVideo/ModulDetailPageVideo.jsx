import React, { Component } from 'react';
import { Pagination, Container } from 'reactstrap';
import { ButtonsPrevNext } from '../../Common/ButtonsPrevNext';
import { CommentBox } from '../../Common/CommentBox';
import { PaginationRow } from '../../Common/Pagination';
import { Video } from './Video';
import { Header } from '../ModulDetailPageText/Header';
import { Breadcrumbs } from '../../Common/Breadcrumbs';

export class ModulDetailPageVideo extends Component{
    render(){
        return(
            <Container>
                <Breadcrumbs/>
                <PaginationRow/>
                <Header/>
                <Video/>
                <ButtonsPrevNext/>
                <CommentBox/>
            </Container>
        );
    }
}