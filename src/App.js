
import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import ALert from './components/ALert';


function App() {

  const [mode, setMode] = useState('light');  //whetther dark mode is enavled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)


  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark Mode has been enabled', 'success')
      document.title = " TXTify - Dark Mode"

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been enabled', 'success')
      document.title = " TXTify - Light Mode"

    }

  }
  return (
    <>

      <Navbar title="TXTify" about="AboutTXTutils" mode={mode} togglemode={togglemode} />
      <ALert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter your text below" mode={mode} />


      </div>


    </>
  );
}

export default App;
