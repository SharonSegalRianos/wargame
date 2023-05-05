import { useState } from 'react'
import './App.css'
import LoginPage from './components/loginPage';
import GamePage from './components/GamePage';
import ScorePage from './components/ScorePage';
import CardsDeck from './classes/CardsDeck';
import Player from './classes/Player';
import ScoreTable from './components/ScoreTable';


let player, computer;
let playerDeck =[],computerDeck=[];
let playersArr=[];


function App() {

  const[pages, setPage]=useState(0);
  let savedPlayers = JSON.parse(localStorage.getItem('players'));


  
  const pageToShow=()=>{
    if (pages==0){
      return <LoginPage start= {startGame} player ={player}/>
    }
    else if(pages==1){
      return <GamePage player = {player} computer={computer} setPage={setPage}/>
    }
    else if(pages == 2){
      return <ScorePage player={player} computer={computer} setPage={setPage} dealAgain ={dealAgain} updatePlayers = {updatePlayers} savePlayer={savePlayer} />
    }
    else{
      return <ScoreTable setPage={setPage} savedPlayers={savedPlayers}/>
    }
  }
  
  const dealAgain = () =>{
    let fullDeck =[];
    playerDeck =[], computerDeck =[];
    fullDeck = new CardsDeck;
    for(let i =0; i<26; i++){
      playerDeck.push(fullDeck.dealCard());
      computerDeck.push(fullDeck.dealCard());
    }
  }

  const startGame = (name)=>{
    dealAgain();
    player = new Player(name, playerDeck);
    if(playersArr.length != 0){
      playersArr.forEach((val)=>{
        if(val.name == player.name){
          player=val;
        }
    })
    }
    computer = new Player('computer',computerDeck);
    setPage(1);
  }
  
  const updatePlayers = () =>{
    player.cards = playerDeck;
    computer.cards = computerDeck;
  }

  const isExist =()=>{
    let flag = false
    if(playersArr.length != 0){
      playersArr.forEach((val,index)=>{
        if(val.name == player.name){
          playersArr[index] = player;
          flag =true;
        }
      })

    }
    return flag;
  }  

  const savePlayer =()=>{
    let result =  isExist();
    if(result == false){
      playersArr.push(player);
    }
    localStorage.setItem('players', JSON.stringify(playersArr));
  }

  const goToTable = () =>{
    if(savedPlayers==null){
      alert('You are the first to play')
    }
    else{
      setPage(4);
    }
  }



return (
  <div className='App'>
    {pageToShow()}
    <button className='btn' style={{display: pages==0 ? "block":"none"}} onClick={()=>goToTable()}>Show Table</button>
  </div>
);

}

export default App
