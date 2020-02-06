import React, { Component } from 'react'
import Board from '../components/Board.js'

class Square extends React.Component {
    
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default Square