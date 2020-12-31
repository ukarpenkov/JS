import s from "./ActiveQuiz.module.css";
import React from 'react';
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (

    <div className={s.ActiveQuiz}>
        <p className={s.Question}>
            <span>
                <strong>
                    {props.answerNumber}.
                </strong>
                &nbsp;{props.question}
            </span>
            <small>{props.answerNumber} из {props.quizLength}</small>
        </p>

        <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>

)

export default ActiveQuiz

