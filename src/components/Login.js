import React, { Component } from 'react'
import axiosInstance from '../axiosAPI';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={username:"",password:""};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        try {
            const response = axiosInstance.post('/token/obtain/', {
                username: this.state.username,
                password: this.state.password
            });
            response.then((data)=>{
                axiosInstance.defaults.headers['Authorization'] = "JWT " + data.data.access;
                localStorage.setItem('access_token', data.data.access);
                localStorage.setItem('refresh_token', data.data.refresh);
            });
        } catch (error) {
            throw error;
        }
    }
    render() {
        return (
            <div>
                <h2>Login Page</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password:
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}
