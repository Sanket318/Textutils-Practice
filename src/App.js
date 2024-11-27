
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {

  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#12273d';
      showAlert("Dark Mode Enables", "success");
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enables", "success");
    }
  }


  return (
    <>
      {/* <Router> */}
       <Navbar title = "TextUtils"  mode={mode} toggleMode={toggleMode}  />
        <Alerts alert={alert} />
        <div className='container my-3'>
          {/* <Routes> */}
            {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Textutils- Word Counter & Character Counter" mode={mode}/>} /> */}
            {/* <Route path="/about" element={<About mode={mode}/>} />
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Textutils- Word Counter & Character Counter" mode={mode}/>
        </div>
      {/* </Router> */}
    </>
  );
}


export default App;
