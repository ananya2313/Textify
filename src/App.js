// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import ALert from './components/ALert';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
} from "react-router-dom";

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
      document.title = " TXTUtils - Dark Mode"

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been enabled', 'success')
      document.title = " TXTUtils - Light Mode"

    }

  }
  return (
    <>
      {/* Concept of props: - humne function me props pass kr diya aur Nav element me props.title likhdiya aur ab yha hum us title ko value de rhe h, hum yha kuch bhi pass kr kste h(but here only string will be passed as the prop type is already setup as string) */}

      <Router>
        <Navbar title="TXTutils" about="About TXTify" mode={mode} togglemode={togglemode} />
        <ALert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About  mode={mode} />}  />
            {/* <TextForm showAlert={showAlert} heading=" Enter your text below" mode={mode} /> */}
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your text below" mode={mode} />} />

          </Routes>

        </div>
      </Router>


    </>
  );
}

export default App;
