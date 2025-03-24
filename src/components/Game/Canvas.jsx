import {  theme, BootstrapButton } from "../../template/theme";
import { Container, Sheet } from "@mui/joy";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import FoodSources from "./Food";
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
    const [food, setFood] = useState(new FoodSources())
    // output graphics, re-renders when update changes
    useEffect(() => {
        const canvas = canvasRef.current
        const {width,height} = canvas
        const context = canvas.getContext('2d')
        
        if (shouldStart){
            food.refillFood(width,height,setFood)
            drawCanvas(canvas)
            snake.move(food,setFood,width,height)
            // if gameend: out of Bounds, hit itself, hit others, game OVER
            if (snake.gameOver(width,height)){
                console.log("game over")
                snake.draw(context)
                setSnake(new NPC())
                setFood(new FoodSources())
                setShouldStart(false)
                return () => {}}
            food.draw(context)
            snake.draw(context)
            context.restore()
        }
        return () => {
        }
    }, [frameCounter, snake, shouldStart, food])

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
        <Container sx={{marginTop: 0, p:0, display:'flex', flexDirection: 'column', justifyItems:'center', alignItems:'center', width:'30rem', height: '25rem'}}>
        <BootstrapButton id="startButton" onClick={() => setShouldStart(!shouldStart)} sx={{width:'fit-content', m:'1rem'}}> 
            { shouldStart? 'Stop' : 'Start'}
        </BootstrapButton>
        <Sheet sx={{backgroundColor:theme.palette.background, borderRadius:'.3rem',display:'flex', flexDirection: 'column', justifyItems:'center', alignItems:'center'}}>
        <canvas id="snakeboard" ref={canvasRef} width='350px' height='300px' style={{}}/>
        </Sheet>
        </Container>
    )
}