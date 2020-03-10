import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import './Question.css';

export class Question extends Component{
    render(){
        return(
            <div className='Question'>
                <p>Here should be a question. BLA bla blakjnfiosuhvrixfngmxkcgbpxocjmvxølfmnvxkjvcnøbfngmøvlxcnblfvhxlcmblxkx</p>
                <p>Choose one correct answer</p>
                <Form>
                    <Form.Check
                        type="radio"
                        label="first radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />
                    <Form.Check
                        type="radio"
                        label="second radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                    />
                    <Form.Check
                        type="radio"
                        label="third radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                    />
                </Form>
            </div>
        );
    }
}