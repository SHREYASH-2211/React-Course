import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes, // Updated from Switch to Routes
  Route // Updated import for React Router v6+
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#05405d';
      showAlert("Dark mode has been enabled", "success"); // Added type
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success"); // Added type
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Router>
        <div className="container my-3">
          <Routes> {/* Updated from Switch to Routes */}
            <Route path="/about" element={<About />} /> {/* Updated Route */}
            <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} /> {/* Updated Route */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
