import React from "react"

import "./style.css"
import "./Type"

export const App = () => {
  

  return (
    <>
      <header>
        <h1>todos.</h1>
        <p>this is React&TS todo app.</p>
      </header>

      <div className="input-area">
        <input className='input-text' placeholder="input todo ..." />
        <button className='add-button'>Add</button>
      </div>

      <div className="todos-area">
        <div className="incomplete-area"> 
          <p>Incomplete TODOs</p>
          <ul>
            <li>save the children.</li>
          </ul>
        </div>

        <div className="complete-area">
          <p>Complete TODOs</p>
          <ul>
            <li>save the children.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
