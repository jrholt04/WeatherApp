import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title from './componets /Title.jsx'
import Weather from './componets /Weather.jsx'
import Footer from './componets /Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex items-center justify-center'>
      <Title />
    </div>
    <div className='place-self-center flex items-center justify-center'>
      <Weather />
     </div> 
     <Footer/>
    </>
  )
}

export default App
