import {  theme, GameButton } from '../../template/theme';
import { Card, Container, Sheet } from '@mui/joy';
import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import FoodSources from './Food';
import NPC from './NPC';
import { Box } from '@mui/material';
    
const drawCanvas = ( canvas) => {
    const { width, height } = canvas.getBoundingClientRect()
    const ctx = canvas.getContext('2d')
    ctx.save()
    ctx.clearRect(0, 0, width, height)
}

const width='350';
const height='300'
const WIDTH = 30;
const HEIGHT = 20;
const SCALE = 15;
const FPS = 5;


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
            drawCanvas(canvas)
            food.refillFood(width,height,setFood)
            food.draw(context)
            // if gameend: out of Bounds, hit itself, hit others, game OVER
            if (snake.gameOver(width,height)){
                snake.draw(context)
                context.textAlign = 'center'
                context.fillStyle = 'white'
                context.font = '34px serif'
                context.fillText('ouch', ((WIDTH * SCALE) / 2), ((HEIGHT * SCALE) / 2 - (2 * SCALE)))
                context.font = '18px serif'
                context.fillText(`caterpillar hurt itself in its confusion`, ((WIDTH * SCALE) / 2), ((HEIGHT * SCALE) / 2 + (2 * SCALE)))
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
            const animate = () => {
                setFrameCounter(c => c + 1)
                setTimeout(() => {
                    requestAnimationFrame(animate);
                }, 1000 / FPS);
            }
            timerId = requestAnimationFrame(animate)
            return () => cancelAnimationFrame(timerId)
        }
    }, [shouldStart])
    
    return (
        <Card sx={{background:'inherit', border:0, marginTop: 0, p:0, display:'flex', flexDirection: 'column', justifyItems:'center', alignItems:'center', width:'30rem', height: '25rem'}}>
            <Box sx={{background:'inherit', display:'flex', flexDirection:'row', border: 0, padding: 0, margin: 0}}>
                <GameButton id='startButton' onClick={() => setShouldStart(!shouldStart)} sx={{width:'fit-content', m:'1rem'}} > 
                    { shouldStart? 'Stop' : 'Start'}
                </GameButton>
                <GameButton id='foodButton' onClick={() => setFood(food.resetFood(width, height))} sx={{width:'fit-content', m:'1rem'}} > 
                    Reset Food
                </GameButton>
            </Box>
            <Sheet sx={{backgroundColor:theme.palette.background, borderRadius:'.3rem', border: '3px solid', borderColor: theme.palette.text, display:'flex', flexDirection: 'column', justifyItems:'center', alignItems:'center'}}>
                <canvas id='snakeboard' ref={canvasRef} width={WIDTH*SCALE} height={HEIGHT*SCALE} style={{}}/>
            </Sheet>
        </Card>
    )
}