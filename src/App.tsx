import { useState } from 'react'
import './App.css'
import Main from './pages/Main'


function App() {
  const [colorTheme, setColorTheme] = useState('dark');

  return (
    <Main
      colorTheme={colorTheme}
      setColorTheme={setColorTheme}
    />
  )
}

export default App
