import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setDarkMode] = useState('light');
  const [mode2, setRedMode] = useState('yellow');
  const [alert,setAlert] = useState(null);
  let style;

  const toggle2=()=>{
    if (mode2==='yellow'){
      setRedMode('red')
      showAlert('Red mode Enabled','success')
      document.body.style.backgroundColor = "red";
      
    }
    else{
      setRedMode('yellow')
      showAlert('yellow mode Enabled','success')
      document.body.style.backgroundColor = "yellow";
    }
  }

  const toggle=()=>{
    if (mode==='light'){
      setDarkMode('dark')
      showAlert('Dark mode Enabled','success')

    }
    else{
      setDarkMode('light')
      showAlert('Light mode Enabled','success')
    }
  }

  const showAlert=(message,type)=>{
    setAlert({message:message,type:type})
    setTimeout(()=>{
      setAlert(null)
    },3000)
    }

  
  return (
    <>
    
    <Navbar  aboutMe="About" mode={mode} toggle={toggle} toggle2={toggle2}/>
    <Alert alert={alert} mode={mode}/>
    <div className="container my-3 ">
    <TextForm heading="Enter the text" mode={mode} mode2={mode2} showAlert={showAlert}/>
    {/* <About /> */}
    </div>
    
    </>
  );
}

export default App;
