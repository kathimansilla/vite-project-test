import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)
  const [inputTest, setInputTest] = useState('');
  const [filterSpecie, setFilterSpecie] = useState('');

  const handelInput = (ev) => {
    setInputTest(ev.target.value);
  }

  const handleSelect = (ev) => {
    setFilterSpecie(ev.target.value);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" rel='noreferrer' target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" rel='noreferrer' target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <form className='header__filter'>
            <input onInput={handelInput} className='header__filter--input' type="text" id='filterName' name='filterName' placeholder='Buscar por nombre'
            />

            <select name='filterSpecie' id='filterSpecie' className='header__filter--select' onChange={handleSelect} >
                <option value="" disabled>Seleccione una especie</option>
                <option value='Human'>Humano</option>
                <option value='Alien'>Alien</option>
                <option value="">Todas las especies</option>
            </select>
        </form>
      </div>
      <p>{filterSpecie} dice: {inputTest}</p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
