import React, { Component } from 'react'
import { connect } from 'react-redux'

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

    async = () => {
        console.log("ASYNC")
        this.props.dispatch({ type: "INCREASE_ASYNC" })
    }

    wft = () => {
        this.props.dispatch({ type: "DECREASE_ASYNC" })
    }


    render() {
        return (
            <div>
                <h2>Counter</h2>
                <p>{this.props.count}</p>
                <button onClick={this.increase}>Click to increment by 1</button>
                <button onClick={this.decrease}>Click to decrease by 1</button>
                <button onClick={this.async}>Click INCREMENT Async</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter)