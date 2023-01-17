import './index.scss';
import React from 'react';

function App() {

  const [count, setCount] = React.useState(0);

  const onPlus = () => {
    setCount(count + 1);
  }
  const onMinus = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={onMinus}>- Minus</button>
        <button className="plus" onClick={onPlus}>Plus +</button>
      </div>
    </div>
  );
}

export default App;