import React, { Component } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export class WordInput extends Component{
    
    render(){
        return(
            <>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Edit text</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
            </>
        );
    }
}