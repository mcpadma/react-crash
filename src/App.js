import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './components/projects';
import ProjectItem from './components/projectItem';
// import  { Navbar, Nav, NavItem,MenuItem, NavDropdown} from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
    //writing initial state keys
    this.state={
      projects:[{
        title:'Business Website',
        category:'Web Design'
      },
      {
        title:'Social App',
        category:'Mob Development'
      },
      {
        title:'Ecommerce Shopping Cart',
        category:'Web Design'
      }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        {/*<Projects test="Hello World"></Projects>*/}
        <Projects projects={this.state.projects}></Projects>
        
      </div>
    );
  }
}

export default App;
