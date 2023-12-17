    import List from './practice/list';
    import { useState } from 'react';

    import Navbar from './components/Navbar';
    import Textform from './components/Textform'; 
    import About from './components/About';
    import Alert from './components/Alert';
    import {
      BrowserRouter as Router,
      Route,
      Routes,
      // Link,
    } from "react-router-dom";
    function App(){
      // Alert
      const[alert, setAlert] = useState(null);
      const showAlert = (message, type) =>{
        setAlert({
          msg : message,
          type : type
        })
        setTimeout(() =>{
          setAlert(null);
        },1500); 
      }
    
      // Dark Mode
      const[mode, setMode] = useState('light'); // whether dark mode is enabled or not
      const toggleMode = () => {
        if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
          showAlert("Dark mode has been enabled", 'success');
          // document.title = 'TextUtils - Dark Mode';
        }
        else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Light mode has been enabled", 'success');
          // document.title = 'TextUtils - Light Mode';
        }
      }
      return (
        <> 
        <Router> 
          <Navbar title = "Textutils" mode = {mode} toggleMode = {toggleMode} aboutText = "About" />
          <Alert alert = {alert}/>
          <div className ="container my-3">
            <Routes>
              <Route path="/about" element = {<About mode = {mode}/>}/>  
              <Route path="/" element = {<Textform heading = "Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode = {mode} showAlert = {showAlert}/> }/> 
              
            </Routes> 
          </div> 
          </Router> 
        </>
      );
    }
    export default App;