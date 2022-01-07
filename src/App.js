import logo from './logo.svg';
import './App.css';

import 'particles.js';

const ParticlesJS = window.particlesJS;

ParticlesJS.load('particles-js', '/assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

function App() {
  return (
    <div className="App">
      <header className="">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
