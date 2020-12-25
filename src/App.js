import './App.css';
import Login from './components/Login';
import SignUp from './components/Signup';
import Hello from './components/Hello';
import {Switch,Route,Link} from 'react-router-dom';
import React, { Component } from 'react';
import axiosInstance from './axiosAPI';

export default class App extends Component {
  constructor(){
    super();
    this.handleLogout=this.handleLogout.bind(this);
  }
  async handleLogout(){
    try{
      const response=await axiosInstance.post("/backlist/",{
        "refresh_token":localStorage.getItem("refresh_token")
      });
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      axiosInstance.defaults.headers['Authorization']=null;
      return response;
    }catch(e){
      console.log(e);
    }
  };
  render() {
    return (
      <div className="App">
      <nav>
        <Link className={"nav-link"} to={"/"}>Home</Link>
        <Link className={"nav-link"} to={"/login/"}>Login</Link>
        <Link className={"nav-link"} to={"/signup/"}>SignUp</Link>
        <Link className={"nav-link"} to={"/hello/"}>Hello</Link>
        <button onClick={this.handleLogout}>Logout</button>
      </nav>
      <main>
          <Switch>
            <Route exact path={"/login/"} component={Login}/>
            <Route exact path={"/signup/"} component={SignUp}/>
            <Route exact path={"/hello/"} component={Hello}/>
            <Route path={"/"} render={()=><h2>Home Again !!</h2>}/>
          </Switch>
      </main>
    </div>
    )
  }
}
