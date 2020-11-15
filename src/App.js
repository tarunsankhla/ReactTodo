import "bootstrap/dist/css/bootstrap.min.css";
import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import CreateTodo from "./components/create.component";
import EditTodo from "./components/edit.component";
import TodosList from "./components/todolist.component";




function App() {
  return (
    <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //    */}
    //   <Router>
    //     <div className="container">
    //       <h2>MERN-Stack Todo App</h2>
    //     </div>
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //         <a class="navbar-brand" target="_blank">
    //           <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
    //         </a>
    //         <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
    //         <div className="collpase navbar-collapse">
    //           <ul className="navbar-nav mr-auto">
    //             <li className="navbar-item">
    //               <Link to="/" className="nav-link">Todos</Link>
    //             </li>
    //             <li className="navbar-item">
    //               <Link to="/create" className="nav-link">Create Todo</Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </nav>
    //       <br/>
    //     <Route path="/" exact component={TodosList} />
    //     <Route path="/edit/:id" component={EditTodo} />
    //     <Route path="/create" component={CreateTodo} />
    //   </Router>
    // </div>
  
  );
}

export default App;
