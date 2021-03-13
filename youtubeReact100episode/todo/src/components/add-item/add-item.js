import React from 'react';
import './add-items.css'

export default class AddItem extends React.Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state.label)
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form className='item-add-form d-flex'
                onSubmit={this.onSubmit}>
                <input type='text' className='form-control'
                    onChange={this.onLabelChange}
                    placeholder='Что нужно записать'
                    value={this.state.label}></input>
                <button className='btn btn-outline-secondary'>
                    Добавить задачу</button>
            </form>
        );
    }
};
