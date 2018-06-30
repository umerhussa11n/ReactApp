import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
          {name: "Umer", age:29},
          {name: "Salman Khan", age:33},
          {name: "Muddassir Basit", age:39}
          ]
  }
  // Once the state or props change in react, then it will re-render the dom with changes
  // so state property and props parms are very important in react
  switchNameHandler = (Name) => {
    this.setState( {
          persons: 
            [
            {name: Name, age:30},
            {name: "salman", age:34},
            {name: "Muddasir", age:39}
            ]}
    )
  } 

  nameChangedHandler = (event) => {
    this.setState( {
      persons: 
        [
        {name: event.target.value, age:30},
        {name: "salman", age:34},
        {name: "Muddasir", age:39}
        ]}
)

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (

      <div className="App">
       <h1>Hi, I am a building react apps now</h1>
       <h2>I love React, it is super awesome</h2>
        <button 
        style={style}
        onClick={this.switchNameHandler.bind(this, 'umer hussain')}> switch Name </button>
        
       <Person 
            name={this.state.persons[0].name} 
            age ={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Umer Hussain Mir')}
            changed={this.nameChangedHandler}
            >
            Hobies: Squash
        </Person>
       
       <Person 
            name={this.state.persons[1].name}
            age= {this.state.persons[1].age}
            />
       
       <Person 
            name={this.state.persons[2].name} 
            age= {this.state.persons[2].age}
            />
       </div>
      
      //React.createElement('div', {className: 'App'}, 
        //React.createElement('h1', null, 'Hi I am a react App'))
    );
  }
}

export default App;
