import { useState } from 'react'
import './App.css'
import { MyButton } from './MyButton'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <MyButton 
          // mixing common button attributes (=> title, onClick) with custom prop (=> variant)
          title="increase count" 
          variant='primary' 
          onClick={ () => setCount(count+1) } 
        >
          Click dudey
          {/* <h2>Heyy</h2>  */}
          {/* JSX does not work as "children" prop, because we typed children to be string only */}
        </MyButton>
        <div>{count}</div>
      </header>
    </div>
  )
}

export default App
