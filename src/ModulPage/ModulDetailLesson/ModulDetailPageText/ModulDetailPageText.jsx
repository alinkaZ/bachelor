import React, { Component } from 'react';
import { TextData } from "../../../Data/TextData";
import { Header } from '../../Common/Header';
import { TextBox } from './TextBox';
import { Row } from 'reactstrap';


export class ModulDetailPageText extends Component{
    
    render(){
        console.log ("Modul Detail Page Text", this.props);
        
        return(
            <>
                {/* <Header TextDataHeader={TextData.title}/>*/}
                <TextBox TextDataBox={this.props.info.details}/> 

            </>
        );
    }
}