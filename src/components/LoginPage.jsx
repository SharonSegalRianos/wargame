import React,{useState} from 'react';
import './loginPage.css'



export default function LoginPage(props) {

  const[name, setName]=useState('');

  const startBtn = () =>{
    if(name == ''){
      alert('Enter a valid name please')
    }
    else{
      props.start(name);
    }
  }

  return (
    <div>
      <h1>Ready for War</h1>
      <div>
        <input onChange={(e)=>{setName(e.target.value)}} type='text'placeholder='Enter your name'></input>
      </div>
      <div>
        <button className='startBtn' onClick={()=>startBtn()}>Start Game</button>
      </div>
    </div>
  )
}
