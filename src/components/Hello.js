import React, { Component } from 'react'
import axiosInstance from '../axiosAPI';

export default class Hello extends Component {
    constructor(props){
        super(props);
        this.state={message:""};
        this.getMessage=this.getMessage.bind(this);
    }
   async getMessage(){
        try{
            let response = await axiosInstance.get('/hello/');
            console.log(response.data);
            const message = response.data.Hello;
            console.log(message);
            this.setState({
                message: message,
            });
        }catch(error){
            console.log("Error : ",JSON.stringify(error,null,4));
            throw error;
        }
    }
    componentDidMount(){
        this.getMessage();
    }
    render() {
        return (
            <div>
                <p><h2>{this.state.message}</h2></p>
            </div>
        )
    }
}
