import React from 'react';
import '../styles/description.css';

function Description(props){
    return(
        <div className='description'>
        {props.description}    
        </div>
    )
}




export default Description;