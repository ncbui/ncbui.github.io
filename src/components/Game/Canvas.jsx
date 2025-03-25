import {  theme, GameButton } from '../../template/theme';
import { Card, Container, Sheet } from '@mui/joy';
import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import FoodSources from './Food';
import NPC from './NPC';
    
const drawCanvas = ( canvas) => {
    const { width, height } = canvas.getBoundingClientRect()
    const ctx = canvas.getContext('2d')
    ctx.save()
    ctx.clearRect(0, 0, width, height)
}

const width='350';
const height='300'
const WIDTH = 30;
const HEIGHT = 24;
const SCALE = 12;


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
        food.refillFood(width,height,setFood)
        
        if (shouldStart){
            drawCanvas(canvas)
            food.draw(context)
            // if gameend: out of Bounds, hit itself, hit others, game OVER
            if (snake.gameOver(width,height)){
                console.log('game over')
                snake.draw(context)
                context.font = '28px serif'
                context.textAlign = 'center'
                context.fillStyle = 'white'
                context.fillText('game over', ((WIDTH * SCALE) / 2), ((HEIGHT * SCALE) / 2 - (2 * SCALE)))
                context.fillText(`anaconda grew to be ${snake.conda.length}`, ((WIDTH * SCALE) / 2), ((HEIGHT * SCALE) / 2 + (2 * SCALE)))
                setSnake(new NPC())
                // setFood(new FoodSources())
                setFrameCounter(0)
                setShouldStart(false)
                return () => {}
            }
            snake.move(food,setFood,width,height)
            snake.draw(context)
            food.refillFood(width,height,setFood)
            context.restore()
        }
        return () => {
        }
    }, [frameCounter, snake, shouldStart, food])

    useLayoutEffect(() => {
        if (shouldStart) {
            let timerId
            const fps = 5;
            const animate = () => {
                setFrameCounter(c => c + 1)
                setTimeout(() => {
                    requestAnimationFrame(animate);
                }, 1000 / fps);
            }
            timerId = requestAnimationFrame(animate)
            return () => cancelAnimationFrame(timerId)
        }
    }, [shouldStart])
    
    return (
        <Container sx={{marginTop: 0, p:0, display:'flex', flexDirection: 'column', justifyItems:'center', alignItems:'center', width:'30rem', height: '25rem'}}>
            <Card sx={{background:'inherit', display:'flex', flexDirection:'row', border: 0,}}>
                <GameButton id='startButton' onClick={() => setShouldStart(!shouldStart)} sx={{width:'fit-content', m:'1rem'}} > 
                    { shouldStart? 'Stop' : 'Start'}
                </GameButton>
                <GameButton id='foodButton' onClick={() => setFood(food.resetFood(width, height))} sx={{width:'fit-content', m:'1rem'}} > 
                    Reset Food
                </GameButton>
            </Card>
            <Sheet sx={{backgroundColor:theme.palette.background, borderRadius:'.3rem',display:'flex', flexDirection: 'column', justifyItems:'center', alignItems:'center'}}>
            <canvas id='snakeboard' ref={canvasRef} width={width} height={height} style={{}}/>
            </Sheet>
        </Container>
    )
}