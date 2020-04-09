import React, { Component } from 'react';
import './Summary.css';
import Table from 'react-bootstrap/Table';


//<button type="button" class="btn btn-secondary btn-lg">Large button</button>

export class Summary extends Component{
    render(){
        return(
            <Table responsive>
                <tbody>
                    <tr>
                                        <td>Duration</td>
                                        <td>60 min</td>
                                    </tr>
                                    <tr>
                                        <td>Institution</td>
                                        <td>OsloMet</td>
                                    </tr> 
                                    <tr>
                                        <td>Subject</td>
                                        <td>Social welfare</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>Free</td>
                                    </tr>
                                    <tr>
                                        <td>Language</td>
                                        <td>English</td>
                    </tr>
                </tbody>
            </Table>
         );
    }
    
}


