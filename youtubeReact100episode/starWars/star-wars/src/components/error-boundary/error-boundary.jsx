import React from 'react';
import ErrorIndication from '../error-indication/error-indication';

export default class ErrorBoundary extends React.Component {

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }
    render() {
        if (this.state.hasError) {
            return <ErrorIndication />
        }
        return this.props.children
    }
}