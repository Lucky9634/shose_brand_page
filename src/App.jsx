import Navigation from "./components/Navigation/Navigation"
import "./App.css"
import Hero from "./components/Hero/Hero"
import gsap from 'gsap';

const App = () => {
  const onMouseMove = (event) => {
   gsap.to("#cursor",{
    x:event.x,
    y:event.y,
    duration:1
   })
  }
  const mouseEnter=()=>{
    gsap.to("#cursor",{
     opacity:1,
     })
  }
  const mouseLeave=()=>{
    gsap.to("#cursor",{
     opacity:0,
     })
  }
  return (
    <main onMouseMove={()=>onMouseMove(event)} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <div id="cursor">
      </div>
      <Navigation />
      <Hero />
    </main>
  )
}

export default App
