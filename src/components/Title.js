import React from 'react';
import '../styles/title.css';

function Title(props){
    return(
        <div>
        <h1 className='title'>
            <h3>{props.type}: Stats</h3>
        </h1>
        </div>
    )
}




export default Title;