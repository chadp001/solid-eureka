import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edi <code>src/App.js</code> and s reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          A limnk
        </a>
        <a href="https://www.example.com"><h1>Click me!</h1></a>
      </header>
    </div>
  );
}

export default App;
