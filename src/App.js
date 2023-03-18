import { deleteTask } from './functions';
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
        autoComplete = "off"
        value={item}
      />

      <button onClick={() => {
        setItem("");
        setList([{
          id: list.length,
          text: item,
        }, ...list]);
      }}> Add </button>

      {
        /*
          Verificar o botão de deletar pq ele tá esquisito 
          Também ver o checkbox
        */
      }
      <ul>
        {list.map((item, index) => (
          
          <li key={index.id}>
            <input 
            type={'checkbox'} 
            id={list.length}
            />
            {item.text}
            <button onClick={() => deleteTask(list, index) }>Delete</button>

            <input
              type={'button'}
              value='Edit'
              id='index'
            />

          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
