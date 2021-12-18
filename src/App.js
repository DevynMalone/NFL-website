import React, { Component } from 'react'
import './App.css';

//Components
import Cover from './Cover'; // imports Cover.js
import Gamecards from './Gamecards'; 






//========CLASS component -> is made out of a class====\\

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Gamecards/>
        <Cover />
        
      </div>
    )
  }
}

export default App;




//========FUNCTIONAL component -> made out of a function====\\\
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// }