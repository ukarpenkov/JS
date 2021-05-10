import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions'
import { bindActionCreators } from 'redux'

const Counter = ({ counter, inc, dec, rnd }) => {

    return (
        <div class="jumbotron">
            <h2 id="counter">{counter}</h2>
            <button className="btn btn-primary btn-lg"
                onClick={dec}
            >+</button>
            <button className="btn btn-primary btn-lg"
                onClick={inc}
            >-</button>
            <button className="btn btn-primary btn-lg"
                onClick={rnd}
            >Random</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}



export default connect(mapStateToProps, actions)(Counter)