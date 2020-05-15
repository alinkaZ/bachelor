import React, { Component } from 'react';
import "../ModulDetailPageText/TextBox.css";


export class TextBox extends Component{
    render(){
        return(
            <div className="TextBox">
                {this.props.TextDataBox}
            </div>
        );
    }
}