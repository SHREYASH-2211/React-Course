import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const[mode,setMode]=useState('light');//whether dark mode is enabled or not

  const[alert,setAlert]=useState(null)



  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
      type:type
    }) 
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#05405d'
      showAlert("Dark mode as been enabled")
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode as been enabled")

    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm heading="Enter the text to analyse below" mode={mode}/>
      <About/>
      </div>
    </>
  );
}

export default App;
