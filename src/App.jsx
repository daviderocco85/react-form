import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';

export const App = () => {
  const [posts, setPosts] = useState(['Economia', 'Sport', 'Moda', 'Attualità', 'Cronaca', 'Benessere']);
  const [input, setInput] = useState('');


  return (
    <>
      <PostList
        posts={posts}
        onClick={(post) => setPosts(posts.filter(_post => _post !== post))} />
      <PostForm
        input={input}
        onSubmit={e => {
          e.preventDefault();
          setPosts([...posts, input]);
          setInput('')
        }}
        onChange={e => { setInput(e.target.value) }} />
    </>
  );
};