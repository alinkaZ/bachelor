import React, { Component } from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import './Video.css';



export class Video extends Component{
    render(){
        return(
                <div style={{ width: 660, height: 'auto'}}>
                    <ResponsiveEmbed aspectRatio="16by9">
                        <embed type="image/svg+xml" src="https://www.youtube.com/watch?v=ia1iuXbEaYQ" />
                    </ResponsiveEmbed>
                </div>    
        );
    }
}