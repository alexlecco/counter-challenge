import './App.css'

// libraries
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div style={{marginBottom: '20px'}}>
        <Link to={'/isa'}>Solución de Isa</Link>
      </div>
      <Link to={'/alex'}>Solución de Alex</Link>
    </>
  )
}

export default App
