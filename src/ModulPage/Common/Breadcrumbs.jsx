import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export function Breadcrumbs(){
    return(
        <Breadcrumb>
            <Breadcrumb.Item href="/modules">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="{`${url}`}">
                Module
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Lesson</Breadcrumb.Item>
        </Breadcrumb>
    );
}