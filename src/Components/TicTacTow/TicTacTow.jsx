import React, { useEffect, useState } from 'react';
import Squrecomponents from './Squrecomponents';
import  "./tictactow.css";
const initialState=["","","","","","","","",""]

const TicTacTow = () => {
  const [gameState,updatedstate]=useState(initialState);
  const [check,setcheck]=useState(false)

  const  squareclick=(index)=>{
    const string=Array.from(gameState);
    string[index]=check ? "X": "O";
    updatedstate(string)
    setcheck(!check)
    console.log("string",string)
  }

  const clearegame=()=>{
    updatedstate(initialState)
  }
  

  useEffect(()=>{
    const winner=checkwinner()
    if(winner){
      alert(`${winner} is winner`)
     
     
    }
  },[gameState])


  const checkwinner=()=>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }
  return (
    <div className='app-header'>
     <div className="row jc-center">
       <Squrecomponents className="b-bottom-right" state={gameState[0]} onClick={()=>{
         squareclick(0)
       }}/>
       <Squrecomponents className="b-bottom-right" state={gameState[1]} onClick={()=>{
         squareclick(1)
       }}/>
       <Squrecomponents  className="b-bottom-right" state={gameState[2]} onClick={()=>{
         squareclick(2)
       }}/>
     </div>
     <div className="row jc-center">
       <Squrecomponents className="b-bottom-right" state={gameState[3]} onClick={()=>{
         squareclick(3)
       }}/>
       <Squrecomponents className="b-bottom-right" state={gameState[4]} onClick={()=>{
         squareclick(4)
       }}/>
       <Squrecomponents className="b-bottom-right" state={gameState[5]} onClick={()=>{
         squareclick(5)
       }}/>
     </div>
     <div className="row jc-center">
      <Squrecomponents className="b-bottom-right" state={gameState[6]} onClick={()=>{
         squareclick(6)
       }}/>
       <Squrecomponents className="b-bottom-right" state={gameState[7]} onClick={()=>{
         squareclick(7)
       }}/>
       <Squrecomponents className="b-bottom-right" state={gameState[8]} onClick={()=>{
         squareclick(8)
       }}/>
     </div>
     <button onClick={
       clearegame
     }>Clear</button>
     <h3>Developed By Sayli</h3>
    </div>
  )
}

export default TicTacTow
