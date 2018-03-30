import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

    }

    register() {
        console.log("I'm registering...")
        axios.post('/api/register')

        // this.props.history.push('/dashboard');
        <Link to='/dashboard'></Link>
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

export default Auth;