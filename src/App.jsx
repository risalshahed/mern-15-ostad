import { useState } from 'react';
import './App.css'
import Counter from './components/Counter.jsx';
import SideEffects from './components/SideEffects.jsx';
import BlogSearch from './components/Search.jsx';
import DebouncedSearch from './components/DebouncedSearch.jsx';

/*
Component Mount -> Component ta Browser er Screen a ashlo / dekha gelo
component Update
component Unmount

Mount -> First time Screen a asha k Mount bole

*/

function App() {
  return (
    <div className='app'>
      <h1>
        React in Depth
      </h1>
      <Counter />
      <div style={{ margin: '24px auto' }} />
      <Unmount />
      <div style={{ margin: '24px auto' }} />
      <SideEffects />
      <div style={{ margin: '24px auto' }} />
      <BlogSearch />
      <div style={{ margin: '24px auto' }} />
      <DebouncedSearch />
    </div>
  )
}

export default App;

function Unmount() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(prev => !prev)}>
        Toggle
      </button>
      {
        show && <p>Hello, Ostad Learners</p>
      }
    </>
  )
}