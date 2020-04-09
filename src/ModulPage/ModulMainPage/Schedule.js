import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import './Schedule.css'

export class Schedule extends Component{
    render(){
        return(
            <Table responsive variant="dark">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>The Norwegian welfare state</td>
                        <td>4 min</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>The Norwegian welfare state</td>
                        <td>4 min</td>
                    </tr> 
                    <tr>
                        <td>3</td>
                        <td>The Norwegian welfare state</td>
                        <td>4 min</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>The Norwegian welfare state</td>
                        <td>4 min</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>The Norwegian welfare state</td>
                        <td>4 min</td>
                    </tr>
                </tbody>
            </Table>
         );
    }
    
}
