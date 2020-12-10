import React, { Component } from 'react';
import withClass from '../hoc/withClass';
import s from './Car.module.css'
import PropTypes from 'prop-types'



class Car extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.current.focus()
        }
    }

    render() {


        const inputClasses = [
            'input'
        ]
        if (this.props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        if (this.props.name.length > 4) {
            inputClasses.push('bold')
        }


        return (
            <div className={s.Car}>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    ref={this.inputRef}
                    type='text'
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')} />
                <button onClick={this.props.onDelete}>Del</button>
            </div>)
    }
}

Car.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func,
    index: PropTypes.number
}



export default Car