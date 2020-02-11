import React from 'react'
import Square from './Square.js'

class Board extends React.Component {
    
    state = {
        squares: [
            'North', 'Jones', 'Willow', 'Brave', 
            'Are', 'Shrek', 'Apple', 'Pee', 
            'Russel', 'Blue', 'Bee', 'Shah', 
            'Sea', 'Frozen', 'Taylor', 'Up', 
        ],
        colorIndex: 0
    }

    renderSquares = () => {
        return this.state.squares.map(square => {
            return (
                <Square 
                    key={square}
                    name={square}
                    selectSquare={this.state.colorIndex}
                />
            )
        })
    }

    colorIndex = () => {
        this.setState({
            colorIndex: this.state.colorIndex + 1
        })
    }

    render() {
        return (
            <div className='board' >
                {this.renderSquares()}
            </div>
        )
    }
}

export default Board