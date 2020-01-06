import React from 'react';
import HelloMyapp from '../src/pages/index'

// state = {
//   applyNum:'',
// }

// handleInput = event =>{
//   let value = event.target.value; 
// }
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HelloMyapp />
        <div>
            <p>
              {/* <input type="text" value={this.state.applyNum} placeholder="0.00" onInput={this.handleInput} maxLength="5" /> */}
            </p>
        </div>
      </header>
    </div>
  );
}

export default App;
