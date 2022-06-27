import { useEffect } from "react"
import executeScene from "../../scene/scene"

const Canvas = () => {
    useEffect(() => {
      executeScene()
    }, [executeScene])
    
  return (
    <canvas className="webgl"></canvas>
  )
}

export default Canvas