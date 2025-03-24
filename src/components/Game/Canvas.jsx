import {  theme, BootstrapButton } from "../../template/theme";
import { Container, Sheet } from "@mui/joy";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import NPC from "./NPC";
    
const drawCanvas = ( canvas) => {
    const { width, height } = canvas.getBoundingClientRect()
    const ctx = canvas.getContext('2d')
    ctx.save()
    ctx.clearRect(0, 0, width, height)
}

export default function Canvas() { 
    const canvasRef = useRef()     // get canvas
    const [shouldStart, setShouldStart] = useState(false)
    const [frameCounter, setFrameCounter] = useState(0)
    const [snake, setSnake] = useState(new NPC())
    // output graphics, re-renders when update changes
    useEffect(() => {
        const canvas = canvasRef.current
        const {width,height} = canvas
        const context = canvas.getContext('2d')

        if (shouldStart){
            drawCanvas(canvas)
            snake.move(width,height)
            if (snake.outOfBounds(width,height)){
                console.log("game over")
                snake.draw(context)
                setSnake(new NPC())
                setShouldStart(false)
                return () => {}}
            snake.draw(context)
            context.restore()
        }
        return () => {
        }
    }, [frameCounter, snake, shouldStart])

    // update the counter
    useLayoutEffect(() => {
        if (shouldStart) {
            let timerId
            const animate = () => {
                setFrameCounter(c => c + 1)
                timerId = requestAnimationFrame(animate)
            }
            timerId = requestAnimationFrame(animate)
            return () => cancelAnimationFrame(timerId)
        }
    }, [shouldStart])
    
    return (
        <Container sx={{marginTop: 0, p:0, display:'flex', flexDirection: 'column', justifyItems:'center', alignItems:'center', width:'25rem', height: '25rem'}}>
        <BootstrapButton id="startButton" onClick={() => setShouldStart(!shouldStart)} sx={{width:'fit-content', m:'1rem'}}> 
            { shouldStart? 'Stop' : 'Start'}
        </BootstrapButton>
        <Sheet sx={{backgroundColor:theme.palette.background, borderRadius:'.3rem',display:'flex', flexDirection: 'column', justifyItems:'center', alignItems:'center'}}>
        <canvas id="snakeboard" ref={canvasRef} width='350px' height='300px' style={{}}/>
        </Sheet>
        </Container>
    )
}