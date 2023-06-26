import { useEffect, useState } from "react"

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y:0})

  useEffect(() => {
    console.log(`Enabled: ${enabled}`)
    const handleMove = (event)=>{
      const{clientX, clientY} = event
      console.log('habdlemove: ', {clientX, clientY})
      setPosition({x: clientX, y: clientY})
    }

    if(enabled) window.addEventListener('pointermove', handleMove)

    return ()=>{
      window.removeEventListener('pointermove', handleMove)
      setPosition({x: 0, y: 0})
    }
  }, [enabled])
  

  return (
    <>
      <div style={{
        position: 'absolute',
        background: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}/>
      <button onClick={()=>setEnabled(!enabled)}>{enabled? "Dejar de seguir puntero": "Seguir puntero"}</button>
    </>
  )
}

export default App
