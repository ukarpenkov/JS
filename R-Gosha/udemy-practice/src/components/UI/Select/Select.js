import React from 'react';
import s from './Select.module.css'

const Select = props => {

    const htmlFor = `${props.label}-${Math.random()}`
    return (
        <div className={s.Select}>
            <label htmlFor={htmlFor}></label>
            <select
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            >
                {props.options.map((option, index) => {
                    return (
                        <option
                            value={option.value}
                            key={option.value + index}
                        >
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select