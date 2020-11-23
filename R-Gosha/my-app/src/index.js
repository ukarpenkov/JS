import React from 'react';
import ReactDOM from 'react-dom';
import s from './style.module.css'
var createReactClass = require('create-react-class')
var Task = createReactClass({
    getInitialState: function () {
        return { edit: false }
    },
    edit: function () {
        this.setState({ edit: true })
    },
    save: function () {

        this.props.update(this.refs.newText.value, this.props.index)
        this.setState({ edit: false })
    },
    remove: function () {
        this.props.deleteBlock(this.props.index)
    },
    rendNorm: function () {
        return (
            <div className={s.taskItem}>
                <div>{this.props.children}</div>
                <button className={s.btn} onClick={this.edit}>редактир!!!овать</button>
                <button className={s.btn} onClick={this.remove}>удалить </button>
            </div>
        )
    },
    rendEdit: function () {
        return (
            <div className={s.taskItem}>
                <textarea ref='newText' defaultValue={this.props.children}></textarea>
                <button className={s.btn} onClick={this.save}>save</button>
            </div>
        )
    },
    render: function () {
        if (this.state.edit) {
            return this.rendEdit()
        } else {
            return this.rendNorm()
        }
    }
})
const Field = createReactClass({
    getInitialState: function () {
        return {
            tasks: []
        }
    },
    add: function (text) {
        var arr = this.state.tasks
        arr.push(text)
        this.setState({ tasks: arr })
    },

    deleteBlock: function (i) {
        let arr = this.state.tasks
        arr.splice(i, 1)
        this.setState({ tasks: arr })
    },
    updateText: function (text, i) {
        let arr = this.state.tasks
        arr[i] = text
        this.setState({ tasks: arr })
    },
    eachTask: function (item, i) {
        return (<Task key={i} index={i} update={this.updateText} deleteBlock={this.deleteBlock}>
            {item}
        </Task>)
    },

    render: function () {
        return <div className={s.field}>
            <button className={s.btn} onClick={this.add.bind(null, 'новое задание')} >добпавить</button>
            {this.state.tasks.map(this.eachTask)}
        </div >
    }
})
ReactDOM.render(<Field />, document.getElementById('root'))