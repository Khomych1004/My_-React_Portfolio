import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Header />
      {/* <Home />
      <Projects />
      <Project />
      <Contact />
      <Footer /> */}

    </div>
  )
}

export default App
