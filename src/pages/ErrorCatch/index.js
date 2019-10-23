import React, { Component } from 'react';

export default class ErrorCatch extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        // 在这里可以做异常的上报
        console.log('componentDidCatch:', info)
    }
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}