
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Hero } from './components/Hero/Hero'
import { Whatido } from './components/Whatido/Whatido'
import { Skills } from './components/Skills/Skills'
import { Experience } from './components/Experience/Experience'

function App() {
//javascript      

  return (
    <div>
      {/* comentarios*/}
      <Navbar/>
      <Hero/>
      <Whatido/>
      <Skills/>
      <Experience/>
      <Footer/>
    
    </div>
  )
}

export default App
