import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { theme, GameButton } from '../../template/theme';
import { Card, Sheet } from '@mui/joy';
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

    useEffect(() => {
        const context = canvasRef.current.getContext('2d')
        
        if (shouldStart){
            drawCanvas(context)
            food.refillFood()
            food.draw(context)
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
        <Card sx={{background:'inherit', border:0, marginTop: 0, p:0, display:'flex', flexDirection: 'column', justifyItems:'center', alignItems:'center', width:'100%', height: '100%'}}>
            <Box sx={{background:'inherit', display:'flex', flexDirection:'row', border: 0, padding: 0, margin: 0}}>
                <GameButton id='startButton' onClick={() => setShouldStart(!shouldStart)} sx={{width:'fit-content', m:'1rem'}} > 
                    { shouldStart? 'Stop' : 'Start'}
                </GameButton>
                <GameButton id='foodButton' onClick={() => food.resetFood()} sx={{width:'fit-content', m:'1rem'}} > 
                    Reset Food
                </GameButton>
            </Box>
            <Card sx={{backgroundColor:theme.palette.background, borderRadius:'.3rem', border: '3px solid', borderColor: theme.palette.text, display:'flex', flexDirection: 'column', justifyItems:'center', alignItems:'center'}}>
                <canvas id='caterpillarboard' ref={canvasRef} width={WIDTH*SCALE} height={HEIGHT*SCALE} style={{}}/>
            </Card>
        </Card>
    )
}