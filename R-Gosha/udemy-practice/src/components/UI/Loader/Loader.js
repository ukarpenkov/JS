import React from 'react';
import { Link } from 'react-router-dom';
import s from './Loader.module.css'

const Loader = props => (
    <div className={s.center}>
        <div className={s.Loader}>
            <div />
            <div />
        </div>
    </div>
)

export default Loader