import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { theme, GameButton } from '../../template/theme';
import { Card } from '@mui/joy';
import { Box } from '@mui/material';
import FoodSources from './Food';
import NPC from './NPC';
import {WIDTH,HEIGHT,SCALE,FPS, drawCanvas, gameOverText} from './constants';
    

export default function Canvas() { 
    const canvasRef = useRef()
    const [shouldStart, setShouldStart] = useState(false)
    const [frameCounter, setFrameCounter] = useState(0)
    const [caterpillar, setCaterpillar] = useState(new NPC())
    const [food, setFood] = useState(new FoodSources())

    const drawFood = (context) =>{
        if (food.sources.length <= 0) food.refillFood();
        food.draw(context);
    }
    useEffect(() => {
        const context = canvasRef.current.getContext('2d')
        
        if (shouldStart){
            drawCanvas(context, WIDTH*SCALE, HEIGHT*SCALE)
            drawFood(context)
            if (caterpillar.gameOver()){
                caterpillar.draw(context)
                gameOverText(context)
                setCaterpillar(new NPC())
                setFrameCounter(0)
                setShouldStart(false)
                return () => {}
            }
            caterpillar.move(food,setFood)
            caterpillar.draw(context)
            context.restore()
        }
        return () => {
        }
    }, [frameCounter, caterpillar, shouldStart, food])

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
        <Card sx={{border: 0, background:'inherit',  margin: '0 1rem', p:0, display:'flex', flexDirection: 'column'}}>
            <Box sx={{border: 0, background:'inherit', display:'flex', flexDirection:'row', padding: 0, margin: 0, width:'fit-content'}}>
                <GameButton id='startButton' onClick={() => setShouldStart(!shouldStart)} > 
                    { shouldStart? 'Stop' : 'Start'}
                </GameButton>
                <GameButton id='resetFoodButton' onClick={() => food.resetFood()} > 
                    Reset Food
                </GameButton>
                <GameButton id='refillFoodButton' onClick={() => food.refillFood()} > 
                    Refill Food
                </GameButton>
            </Box>
            <Box sx={{backgroundColor:theme.palette.background, borderRadius:'.3rem', border: '3px solid', borderColor: theme.palette.text, width:'fit-content'}}>
                <canvas id='caterpillarboard' ref={canvasRef} width={WIDTH*SCALE} height={HEIGHT*SCALE} style={{}}/>
            </Box>
        </Card>
    )
}