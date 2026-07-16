import { useState } from 'react';
import './App.css';


export const App = () => {
  const [posts, setPost] = useState(['Economia', 'Sport', 'Moda', 'Attualità', 'Cronaca', 'Benessere']);


  return (
    <>
      <ul>
        {posts.map(post => (
          <li key={post}>{post}</li>
        ))}
      </ul>
    </>
  )
};