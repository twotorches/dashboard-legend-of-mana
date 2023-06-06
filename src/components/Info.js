import React from 'react';
import '../styles/info.css';

//function Info({name,species,synchro,stats}){
    function Info(character){  
    const {name,species,synchro,stats} = character      
    console.log(stats)
    return(
        <div className='info'>
            <img className='img'
        src={require(`../images/teedie.png`)}
        alt='imagen teedie' />
            <p>{name}</p>
            <p>{species}</p>
            <p>{synchro}</p>
            
        </div>
    )
}




export default Info;