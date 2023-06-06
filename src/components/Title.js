import React from 'react';
import '../styles/title.css';

function Title(props){
    return(
        <div>
        <h1 className='title'>
            {props.type}
        </h1>
        </div>
    )
}




export default Title;