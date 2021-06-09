
import './App.css';
import './My_app.css';
import Cat from './Cat.js'
import Request from "./Request";
import React from "react";

function App() {


  return (
    <div className="App" style={{border:'1px solid green'}}>

      <header className="App-header">

          {/* <Cat/> */}
        <Request/>

      </header>


    </div>
  );
}

export default App;
