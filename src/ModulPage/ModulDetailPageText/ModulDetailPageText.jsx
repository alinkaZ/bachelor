import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { TextBox } from './TextBox';
import { ButtonsPrevNext } from './ButtonsPrevNext';
import { CommentBox } from './CommentBox';
import { PaginationRow } from './Pagination';
import { Header } from './Header';
import { Breadcrumbs } from '../../ModulPage/Breadcrumbs';

export class ModulDetailPageText extends Component{
    render(){
        return(
            <Container>
                <Breadcrumbs/>
                <PaginationRow/>
                <Header/>
                <TextBox/>
                <ButtonsPrevNext/>
                <CommentBox/>
            </Container>
        );
    }
}