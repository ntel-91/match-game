import React, { Component } from 'react'
import Square from './Square.js'

class Board extends React.Component {
    
    state = {
        squares: [
            'North', 'Jones', 'Willow', 'Brave', 
            'Are', 'Shrek', 'Apple', 'Pee', 
            'Russel', 'Blue', 'Bee', 'Shah', 
            'Sea', 'Frozen', 'Taylor', 'Up', 
        ]
    }

    renderSquares = () => {
        return this.state.squares.map(square => {
            return <Square name={square}/>
        })
    }

    render() {
        
        return (
            <div className='board'>
                {/* {this.renderSquares(this.state.squares)}        */}
                {this.renderSquares()}
            </div>
        )
    }
}

export default Board