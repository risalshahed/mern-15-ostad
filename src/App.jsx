import './App.css'
import Avatar from './components/Avatar';
import Count from './components/Count';
import Profile from './components/Profile'

// HTML Element -> div, h1, h2
// HTML Tag -> <div>, <div/>
// HTML Attrubute -> class, id, src, alt

function App() {

  // JSX
  return (
    // <div className='app'> -> here, 'className' is a prop
    <div className='app'>
      State Event Handler
      <Profile />
      <Count />
      <Avatar />
    </div>
  )
}

export default App;