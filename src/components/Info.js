import React from 'react';
import '../styles/info.css';

//function Info({name,species,synchro,stats}){
/*const infoObject = ({character}) => {
    const {name,species,synchro,stats} = character;
    const {power,skill,defense} = characterChild;
}
*/

function InfoStats({stats}) {
    const {power,skill, defense, magic, hitPoints, spirit, charm, luck, offense} = stats;
    return(
        <div className="contenedor-infostats">
            <div className="contenedor-imagen-texto-infostats">
                <div>    
                    <img 
                    src={require(`../images/stat-power.png`)}
                    alt='imagen stat power' />
                </div>
                <div>
                    <p>{power}</p> 
                </div>     
            </div>    
            <div>
            <div>
                    <img 
                    src={require(`../images/stat-skill.png`)}
                    alt='imagen stat skill' />
                    <p>Skill: {skill}</p> 
                
                </div>
                <p>Defense: {defense}</p> 
                <p>Magic: {magic}</p> 
            </div>
            <div>
                <p>Hit Points: {hitPoints}</p>
                <p>Spirit: {spirit}</p>
            </div>
            <div>
                <p>Charm: {charm}</p> 
                <p>Luck: {luck}</p>
                <p>Offense: {offense}</p>
            </div>
        </div>    
    )
}
    
function InfoGeneral({character}){      
    const {name,species,synchro,level,hp} = character;

    return(
        <div className='info'>
            <img className='img'
        src={require(`../images/teedie.png`)}
        alt='imagen teedie' />
            <div>
            <p>{name}</p>
            <p>{species}</p>
            <p>Level: {level}</p> 
            <p>HP: {hp}</p> 
            <p>Syncho effect: {synchro}</p> 
            </div>
        </div>        
         )
        }


function Info({character}){      
    const {name,species,synchro,level,hp,stats} = character;

    return(
        <div className='info'>
            <InfoGeneral character={character}></InfoGeneral>   
            <InfoStats stats={stats}></InfoStats>            
        </div>
    )
}




export default Info;