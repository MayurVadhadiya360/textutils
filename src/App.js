import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled!", "success");
      document.title = "Text Utils - DarkMode";
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled!", "success");
      document.title = "Text Utils - LightMode"
    }
  }


  return (
    <>
    {/* <Router> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    <div className='container'>
      {/* <Link to='/'>Home</Link>
      <Link to='/about'>About</Link> */}

      <Routes>
      <Route exact path='/textutils' element={<TextForm heading="Enter text here to Analyze" mode={mode} showAlert={showAlert}/>} />
      <Route exact path='/textutils/about' element={<About/>} />
      {/* <Route path='/about'><About/></Route> */ /*This is wrong*/}
      </Routes>

      {/* <Switch>

        <Route path='/'>
          <TextForm heading="Enter text here to Analyze" mode={mode} showAlert={showAlert}/>
        </Route>

        <Route path='/about'>
          <About/>
        </Route>

      </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
