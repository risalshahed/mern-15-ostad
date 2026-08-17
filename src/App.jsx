import './App.css'
import ArrayState from './components/ArrayState';
import ObjectState from './components/ObjectState';
import RefDemo from './components/RefDemo';
import StateDemo from './components/StateDemo';

function App() {
  console.log('App Component Re Rendered')

  return (
    <div className='app'>
      <h1>
        Escape Hatches
      </h1>
      <StateDemo />
      <RefDemo />
      <ObjectState />
      <ArrayState />
    </div>
  )
}

export default App;
