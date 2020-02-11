import React from 'react'

class Square extends React.Component {
    
    state = {
        colors: ['red', 'blue', 'purple', 'green']
    }

    // selectSquare = () => {
    //     this.setState({
    //         colorIndex: this.state.colorIndex + 1
    //     })
    // }

    render() {
        return (
            <div 
                onClick={this.props.selectSquare}
                style={{backgroundColor: this.state.colors[this.props.colorIndex]}}
            >
                {this.props.name}
            </div>
        )
    }
}

export default Square