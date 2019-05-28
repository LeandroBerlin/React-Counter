import React from 'react'
import { connect } from 'react-redux';

class Footer extends React.Component {
    render() {
        return (
            <div>
                Last update: {this.props.date ? this.props.date.toString() : "Not yet"}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        date: state.date
    }
}

export default connect(mapStateToProps)(Footer)