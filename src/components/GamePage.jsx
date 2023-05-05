import React, { useState } from 'react'
import Card from './Card';
import './gamePage.css'

let computerPoints = 0, playerPoints = 0;

export default function GamePage(props) {
  const[index, setIndex] = useState(0);

  const nextNScore = ()=>{
    if(props.computer.cards[index] > props.player.cards[index]){
      computerPoints++;
    }
    if(props.computer.cards[index] < props.player.cards[index]){
      playerPoints++;
    }
    if(index != 25){
      setIndex(index+1);
    }
    else{
      props.player.games++;
      if(computerPoints > playerPoints){
        props.player.lastGamePoints = 0;
        props.computer.lastGamePoints = 1;
        props.player.loses++;
        props.player.lastGame = 1;
      }
      if(computerPoints < playerPoints){
        props.player.lastGamePoints = 1;
        props.computer.lastGamePoints = 0;
        props.player.wins++;
        props.player.lastGame = 2;
      }
      if(computerPoints == playerPoints){
        props.player.lastGamePoints = 1;
        props.computer.lastGamePoints = 1;
        props.player.draws++;
        props.player.lastGame = 0;
      }
        computerPoints = 0;
        playerPoints = 0;
        props.setPage(2);  
      }
    }
    const computerCards =() =>{
      if(props.computer.cards[index] == 11){
        return "P"
      }
      else if(props.computer.cards[index] == 12){
        return "Q"
      }
      else if (props.computer.cards[index] == 13){
        return "K"
      }
      else{
        return props.computer.cards[index];
      }
    }

    const playerCards =() =>{
      if(props.player.cards[index] == 11){
        return "P"
      }
      else if(props.player.cards[index] == 12){
        return "Q"
      }
      else if (props.player.cards[index] == 13){
        return "K"
      }
      else{
        return props.player.cards[index];
      }
    }
    
  return (
    <div>
      <div className='container'>
        <div className='computer'>
          <h1>Computer</h1>
          <h2>Score: {computerPoints}</h2>
        </div>
        <div>
          <h2>Round: {props.player.games+1}</h2>
          <h4 style={{color:"blue"}}>Cards round: {index+1}</h4>
          <div className='cards'>
            <Card val={onload=computerCards()}/>
            <Card val={onload=playerCards()}/>
        </div>
        </div>
        <div className='player'>
          <h1>{props.player.name}</h1>
          <h2>Score: {playerPoints}</h2>
        </div>
      </div>
      <div className='nextDiv'>
        <p>P = Prince, Q = Queen, K = King</p>
        <button className='nextBtn' onClick={()=>nextNScore()}>Next</button>
      </div>
    </div>
  )
}
