import s from "./AnswerItem.module.css";
import React from 'react';

const AnswerItem = props => {
    const cls = [s.AnswerItem]
    if (props.state) {
        cls.push(s[props.state])
    }
    return (
        <li className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}>
            {props.answer.text}
        </li>
    )
}

export default AnswerItem