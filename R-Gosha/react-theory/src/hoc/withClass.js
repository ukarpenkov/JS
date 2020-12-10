import React, { Component } from 'react';

const withClass = (Component) => {
    return props => {
        return (
            <div className='.Car'>
                <Component {...props} />
            </div>
        )
    }
}

export default withClass