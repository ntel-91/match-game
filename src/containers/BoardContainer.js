import React, { Component } from 'react'
import Board from '../components/Board.js'
import '../css/board.css'

class BoardContainer extends React.Component {
    
    render() {
        return (
            <div className='board-container'>
                <Board />
            </div>
        )
    }
}

export default BoardContainer