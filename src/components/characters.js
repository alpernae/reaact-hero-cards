import React from 'react'
import allcharacters from '../character.json'
import './charaters.style.css'

const newcharacters = allcharacters.map((character)=>{
    return(
        <div className="card-border">
  <div className="card-bg"> 
    <div className="container-logo">
      <div className="logo"></div>
        <div className="logo-inside">
          <div className="first"></div>
          <div className="second"></div>
        </div>
    </div>
    <div id="blur-area"></div>
    <div className="marquee">
      <div className="marquee__inner" aria-hidden="true">
        <span className="viper">{character.name}</span>
        <span className="viper">{character.name} {character.name}</span>
        <span className="viper">{character.name} {character.name} {character.name}</span>
      </div>
    </div>
    
  </div>
	<div className="mist-container">
		<div className="mist"></div>
	</div>
	<strong id="text-border">{character.name}<br />{character.power} </strong>
</div>
    )
})

function Characters() {
  return (
    <div className='body'>
        {newcharacters}
      
    </div>
  )
}

export default Characters
