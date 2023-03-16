import './functions';
import './App.css';
import { useEffect, useState} from 'react';

function App() {

  let [list, setList] = useState([]);
  let [item, setItem] = useState("");

  useEffect(() => {
    setList([])
  }, [])

  return (
    <div className="App">

      <h1>Oi, tudo bem?</h1>
      <p>Meu nome é Tales, prazer em conhece-lô!</p>

      <input 
        type="text" 
        name="task"
        onChange={e => setItem(e.target.value)}
      />

      <button onClick={() => {
        setItem("");
        setList([{
          id: list.length,
          text: item,
        }, ...list]);
      }}> Add </button>

      <ul>
        {list.map((item, index) => (
          <li key={index.id}>
            {item.text}
            <button>Delete</button>
            <button>Edit</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
