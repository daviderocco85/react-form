import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';

export const App = () => {


  const [newArticles, setNewArticles] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  });

  const [posts, setPosts] = useState([]);


  const handleFormChange = (e) => {
    setNewArticles(previous => ({
      ...previous,
      [e.target.name]: e.target.type === 'checkbox'
        ? e.target.checked
        : e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newArticles.title.trim()) return;
    setPosts(previous => [...previous, newArticles]);
    setNewArticles({ author: '', title: '', body: '', public: false });
  };

  const handleDelete = (title) => {
    setPosts(previous => previous.filter(post => post.title !== title));
  };


  return (
    <>
      <header className='container'>
        <h1>Il mio Blog</h1>
        <p>Aggiungi un articolo nel form qui sotto</p>
      </header>
      <main className='container'>
        <PostList
          posts={posts}
          onClick={handleDelete} />

        <PostForm
          newArticles={newArticles}
          onChange={handleFormChange}
          onSubmit={handleSubmit}
        />
      </main>
    </>
  );
};