import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export class Breadcrumbs extends Component{
    constructor (params){
        super(params);
        this.state={
            
            modulID: this.params,
        }
    }
    render (){
    return(
        <>
        <Breadcrumb>
            <Breadcrumb.Item href="/modules">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="{`/modules/${modulId}`}">
                Module
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Lesson</Breadcrumb.Item>
        </Breadcrumb>
        </>
    );
}}