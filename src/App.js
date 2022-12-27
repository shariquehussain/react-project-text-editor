import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled", "success");
      document.title = 'Texteditor-dark mode';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" light mode has been enabled", "success");
      document.title = 'Texteditor-light mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Texteditor" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
              
          <Routes>
            <Route exact path="/About" element={<About  mode={mode} />} />
            <Route exact path="/" element=
            {<Textform showAlert={showAlert} heading="Try-TextEditor for count-words,count-character,remove exctra spaces" mode={mode}  
            />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
