import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from "./UserInput"
import UserOutput from "./UserOutput"
import ValidationComponent from "./ValidationComponent"
import Char from "./CHarComponent"

class App extends Component {
  state = {
    username:"Shamim",
    textinput:"kabab",
    textlength:5  
  }

  changeUsername = (newUsername) =>{
    this.setState({
      username:newUsername
    });
  }
  usernameChnagedHandler = (event) =>{
    this.setState({
      username:event.target.value
    });
  }
  changedValueHandler=(event)=>{
    console.log(event.target.value)
    const textInput = event.target.value
    let textlength=textInput.length
    this.setState({textinput :textInput,
    textlength:textlength})
  }
  deleteCharHandler=(index)=>{
    const text = this.state.textinput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({textinput:updatedText})
  }

  render() {
    
    const CharList = this.state.textinput.split('').map((c,index) => {
      return <Char character={c} key={index}
      clicked={()=>this.deleteCharHandler(index)} />
    })
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <UserOutput/>
          <UserInput changed={this.usernameChnagedHandler} name={this.state.username}/>
          <button onClick={this.changeUsername.bind(this,"Namak")}>Salt</button>
          <UserOutput username={this.state.username}/>
          <input type="text" value={this.state.textinput} onChange={(event)=>this.changedValueHandler(event)}/>
          <p> Lalalala {this.state.textinput} {this.state.textlength}</p>
          <ValidationComponent length={this.state.textlength}/>
          {CharList}
      </div>
    );
  }
  debugger;
}

export default App;
