import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const [firstCount, setFirstCount] = React.useState(0);
  const [secCount, setSecCount] = React.useState(0);

  return (
    <div className="App">
      <h1>React Test</h1>
      <textarea type="text" rows={5} onChange={e => setFirstCount(e.target.value.length)}></textarea>
      <p>Text Count { firstCount }</p>
      <textarea type="text" rows={5} onChange={e => setSecCount(e.target.value.length)}></textarea>
      <p>Text Count { secCount }</p>
    </div>
  );
}

export default App;
