import React from 'react';
import './scoreTable.css';


export default function ScoreTable(props) {

    let sortedArr= props.savedPlayers.sort((a,b)=>{return b.wins-a.wins})
    console.log(sortedArr)

  return (
    <>
        <button className='closeBtn' onClick={()=>props.setPage(0)}>X</button>
        <h1>Score Table</h1>
        <table>
            <tr>
                <th className='tableHead' >Name</th>
                <th className='tableHead'>Wins</th>
                <th className='tableHead'>Losses</th>
                <th className='tableHead'>Draws</th>
                <th className='tableHead'>Games</th>
            </tr>
            {sortedArr.map(val=>{
                return(
                    <tr>
                    <td className='tableRow'>{val.name}</td>
                    <td className='tableRow'>{val.wins}</td>
                    <td className='tableRow'>{val.loses}</td>
                    <td className='tableRow'>{val.draws}</td>
                    <td className='tableRow'>{val.games}</td>
                    </tr>
                )
            })}
        </table>
    </>
  )
    }
