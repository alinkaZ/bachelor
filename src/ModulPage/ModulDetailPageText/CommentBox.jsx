import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
 
 
 export class CommentBox extends Component{
    render(){
        return(
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write your comment</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Comment
                </Button>
            </Form>
            );
    }
}