import React from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../components/UI/Loader/Loader';
import s from './QuizList.module.css'
import axios from '../../axios/axios-quiz';

export default class QuizList extends React.Component {

    state = {
        quizes: [],
        loading: true,
    }
    renderQuizes() {
        return this.state.quizes.map((quiz) => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink
                        to={'/quiz/' + quiz.id}
                    >
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    async componentDidMount() {
        try {
            const response = await axios.get('quizes.json')
            const quizes = []
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })

            })
            this.setState({
                quizes, loading: false
            })
        } catch (e) {
            console.log(e)
        }

    }
    render() {
        return (
            <div className={s.QuizList}>

                <div>
                    <h1>Список тестов</h1>
                    {this.state.loading
                        ? <Loader />
                        : <ul>
                            {this.renderQuizes()}
                        </ul>}
                </div>
            </div>
        )
    }
}