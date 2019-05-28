import React, { Component } from 'react'
import { connect } from 'react-redux';

class Counter extends Component {

    increase = () => {

        //NOW WE DISPATCH ACTION
        this.props.dispatch({ type: "INCREASE" })
        console.log("Want increase counter")
    }

    decrease = () => {
        this.props.dispatch({ type: "DECREASE" })
        console.log("Want decrease counter")
    }

    reset = () => {
        this.props.dispatch({ type: "RESET" })
    }

    render() {
        return (
            <div>
                <h2>Counter with Redux</h2>
                <button onClick={this.increase}>+ </button>
                <button onClick={this.decrease}> - </button>
                <div> Count: {this.props.count} </div>
                <div> Click: {this.props.click} </div>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.count,
        click: state.click
    }
}

export default connect(mapStateToProps)(Counter);