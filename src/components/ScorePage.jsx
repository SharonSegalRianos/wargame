import React,{useState} from 'react';
import "./scorePage.css"

export default function ScorePage(props) {

  const checkScore=()=>{
    if(props.player.lastGame == 1){
      return <h1 style={{color:"red"}}>You lost!</h1>
    }
    else if(props.player.lastGame == 2){
      return <h1 style={{color:"green"}}>You won!</h1>
    }
    else{
      return <h1 style={{color:"grey"}}>It is a Draw</h1>
    }
  }

  const playAgain = () => {
    props.player.lastGamePoints = 0;
    props.computer.lastGamePoints = 0;
    props.player.cards = [];
    props.computer.cards =[];
    props.updatePlayers();
    props.dealAgain();
    props.setPage(1);
  }

  const logOut = () =>{
    props.player.lastGamePoints = 0;
    props.computer.lastGamePoints = 0;
    props.savePlayer();
    props.setPage(0);
  }


  return (
    <div>
      {checkScore()}
      <h2>Current game result:<br/><span>{props.player.name}: {props.player.lastGamePoints} - Computer: {props.computer.lastGamePoints}</span> </h2>
      <h3>Your total games result:<br/> Losses: {props.player.loses} - Wins: {props.player.wins}</h3>
      <button className='playBtn' onClick={()=>playAgain()}>Again?</button>
      <button className='playBtn' onClick={()=>logOut()}>Logout</button>
    </div>
  )
}
