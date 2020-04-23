import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { TextBox } from './TextBox';
import { ButtonsPrevNext } from './ButtonsPrevNext';
import { CommentBox } from './CommentBox';
import { PaginationRow } from './Pagination';
import { Header } from './Header';
import { Breadcrumbs } from '../../ModulPage/Breadcrumbs';
import { TextData } from "../../Data/TextData";

export class ModulDetailPageText extends Component{
    
    render(){
        console.log (TextData.description);
        
        return(
            <Container>
                <Breadcrumbs/>
                <PaginationRow/>
                <Header TextDataHeader={TextData.title}/>
                <TextBox TextDataBox={TextData.description}/>
                <ButtonsPrevNext/>
                <CommentBox/>
            </Container>
        );
    }
}