import React, { Component } from 'react';
import { TextData } from "../../../Data/TextData";
import { Header } from './Header';
import { TextBox } from './TextBox';


export class ModulDetailPageText extends Component{
    
    render(){
        console.log (TextData.description);
        
        return(
            <>
                <Header TextDataHeader={TextData.title}/>
                <TextBox TextDataBox={TextData.description}/>

            </>
        );
    }
}