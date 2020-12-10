import s from "./ActiveQuiz.module.css";
import React from 'react';
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (

    <div className={s.ActiveQuiz}>
        <p className={s.Question}>
            <span>
                <strong>
                    2.
                </strong>
                &nbsp;{props.question}
            </span>
            <small>4 из 12</small>
        </p>

        <AnswersList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>

)

export default ActiveQuiz

