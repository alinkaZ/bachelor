import React, { Component } from "react";
import { InfoMainPage } from './InfoMainPage';
import { NewCard} from './NewCard';

export class CardModules extends Component{
    
    render(){
        var cardList= [1, 2, 3, 4];
        return(
            <>
            <InfoMainPage/>
            <div className='cards'>     
              {
               cardList.map((x,y)=>{
                return <NewCard/>;
               })         
              }   
            </div>
            </>
        );
    }
}

            