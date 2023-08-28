import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/propsTypes/Greet';
import Person from './components/propsTypes/Person';
import PersonList from './components/propsTypes/PersonList';
import Status from './components/propsTypes/Status';
import Children from './components/propsTypes/Children';
import OptionalProps from './components/propsTypes/OptionalProps';
import Event from './components/propsTypes/Event';


function App() {
  let personName = {
    first: 'Puran',
    last: 'Singh'
  }

  let personList = [
    {
      first:'Rajesh',
      last : "Kumar"
    }, 
    {
      first:"Vishal",
      last :"Soni"
    }, 
    {
      first:"Amit",
      last  :"Sharma"
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Greet name="Akshay" totalMessages={10} isLoggedIn={true} />
        <Person name={personName} />
        <PersonList names={personList}/>
        <Status status='success' />
        <Children>I am here</Children>
        <OptionalProps name="Sachin" />
        <Event handleClick={(event, id) => { console.log("clicked", event, id) }}/>
      </header>
    </div>
  );
}

export default App;
