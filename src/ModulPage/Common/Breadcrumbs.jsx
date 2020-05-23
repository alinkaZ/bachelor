import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export function Breadcrumbs(){
    return(
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Module
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Lesson</Breadcrumb.Item>
        </Breadcrumb>
    );
}