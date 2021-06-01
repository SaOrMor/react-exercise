import React from 'react';
import './App.css';




class App extends React.Component {

  constructor() {
    super()
    
    this.state = {
      item: "",
      things: []
    }
  }
  
  handleChange = (event) => {
    event.preventDefault()
    console.log("name", event.target.name);
    console.log("value", event.target.value);

    const {name, value} = event.target;

    this.setState({[name]: value});

    console.log("name", this.state.name);
  }
  
  hanldeSubmit = (event) => {
    event.preventDefault()
    const {item, things} = this.state;
    things.push(item)

    this.setState({things: things});

    console.log(this.state.things)
  }


  render(){

    return (
      <div className="App">
       <h2> TODO List App</h2>
        <input type="text" name="item" value={this.state.item} onChange={this.handleChange}></input>
        <button onClick={this.hanldeSubmit}> Add todo</button>
     

      {this.state.things.reverse().map((todo) => {
        return (<p>{todo}</p>)
      })}
      </div>
    );
  }
  }
  

export default App;
