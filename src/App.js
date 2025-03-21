// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <div className="container">
      <div className="white-section">
        <h1>White Section</h1>
      </div>
      <div className="black-section">
        <h1>Black Section</h1>
      </div>
    </div>
  );
};

export default App;
