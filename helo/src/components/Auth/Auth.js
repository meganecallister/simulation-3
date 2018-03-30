import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getUserInfo } from '../../ducks/reducer';
import { connect } from 'react-redux';


class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    login() {
        console.log("I'm logging in...");
        axios.post('/api/login', { username: this.state.username, password: this.state.password })
        .then(this.props.history.push('/dashboard'))
    }

    register() {
        console.log("I'm registering...")
        axios.post('/api/register', { username: this.state.username, password: this.state.password })
        .then(this.props.history.push('/dashboard'))
    }

    render() {
        return (
            <div>
                Auth
                <input
                    type='text'
                    value={this.state.username}
                    placeholder='Username'
                    onChange={ e => this.setState({ username: e.target.value })}/>
                <input
                    type='text'
                    value={this.state.password}
                    placeholder='Password'
                    onChange={ e => this.setState({ password: e.target.value })}/>
                <button onClick={() => this.login()}>Login</button>
                <button onClick={() => this.register()}>Register</button>
            </div>
        )
    }
}



export default connect(null, { getUserInfo })(Auth);