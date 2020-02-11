import React from 'react'

class Square extends React.Component {
    
    state = {
        bgColor: ""
    }

    selectSquare = () => {
        this.setState({
            bgColor: 'red'
        })
    }

    render() {
        return (
            <div onClick={this.selectSquare} style={{backgroundColor: this.state.bgColor}}>
                {this.props.name}
            </div>
        )
    }
}

export default Square