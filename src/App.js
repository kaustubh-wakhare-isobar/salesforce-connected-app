
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Form from './components/Form';

import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App">
          <ul className="App-header">

            <li>
             
              <Link to="/form">Form</Link>
            </li>
          </ul>
          <Routes>
            <Route path='/' element={< Login />}></Route>
            <Route exact path='/form' element={< Form />}></Route>
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
