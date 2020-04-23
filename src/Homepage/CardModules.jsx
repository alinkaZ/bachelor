import React, { Component } from "react";
import { InfoMainPage } from './InfoMainPage';
import { NewCard} from './NewCard';
import {cardData} from "../Data/CardData";

export class CardModules extends Component{
    
    render(){
    
        return(
            <>
            <InfoMainPage/>
            <div className='cards'>     
              {
               cardData.map((x,y)=>{
                return <NewCard cardData={x}/>;
               })         
              }   
            </div>
            </>
        );
    }
}

            