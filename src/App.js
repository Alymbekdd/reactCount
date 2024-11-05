import { useState } from 'react';
import './App.css';
function App() {

  const [num, setNum] = useState(0);
  const pluse = () => {

    setNum(num + 1)
    if (num === 30) {
      setNum(0)
    }

  }

  const minus = () => {

    setNum(num - 1)
    if (num === 0) {
      setNum(0)
    }

  }

  return (
    <div className="App">
      <div className={`
    ${num < 10 ? `tasbih sub` : "tasbih allham"}
    ${num > 20 ? `tasbih allah` : ""}
    `}>
      <div className='item'>
      <p><span className = 'word'>
          {`${num <= 9 ? 'Субаханаллах' : ''}
          ${num >= 10 && num <= 19 ? 'Аллхамдуллилах' : ''}
          ${num >= 20 ? 'Аллахуакбар' : ''}
      `}</span> {num} </p>
      </div>
      <button className='btn' onClick={()=> pluse()}>+</button>
      </div>
    </div>
  );

};

export default App;
