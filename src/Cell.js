import React from 'react';
import Matrix from './Matrix'

export default class Cell extends React.Component {

    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    onClick = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
        <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.onClick}></div>
        )
    }

}
