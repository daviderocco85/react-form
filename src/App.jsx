import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';


export const App = () => {
  const [posts, setPosts] = useState(['Economia', 'Sport', 'Moda', 'Attualità', 'Cronaca', 'Benessere']);
  const [input, setInput] = useState('');

  return (
    <>
      <ul>
        {posts.map(post => (
          <li key={post}>{post}<i
            className="bi bi-trash3-fill"
            onClick={() => setPosts(posts.filter(_post => _post !== post))} >
          </i>
          </li>
        ))}
      </ul>
      <form onSubmit={e => {
        e.preventDefault();
        setPosts([...posts, input]);
        setInput('');
      }}>
        <input
          type="text"
          value={input}
          placeholder='Inserisci nuovo articolo'
          onChange={e => { setInput(e.target.value) }} />
        <button>Aggiungi</button>
      </form>
    </>
  )
};