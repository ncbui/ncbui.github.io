// import { SnakeCanvas } from "./snakeCanvas";
import Canvas from "../components/Game/canvas";
import { theme, BodySheets, NavTitleText, Subtitle } from "../template/theme";

export default function Game () { 
    return (
      <BodySheets>
        <NavTitleText>
            Anaconda 
            <NavTitleText sx={{fontWeight:'600', fontSize: '1rem', marginLeft:'1rem'}}>
            Snake meets Blockade. 
            </NavTitleText>
            </NavTitleText>
            <NavTitleText sx={{fontStyle: 'italic', fontWeight:'600', fontSize: '1rem', marginLeft:'1rem', color: theme.palette.text}}>
            Built with React, Vite, HTML Canvas, and requestAnimationFrame.
            </NavTitleText>
        <Subtitle sx={{maxWidth:'22rem', margin: '1rem'}}>
        Start game to start anaconda wandering. Press the reset button to feed your friend food. Eat well. Live long and prosper.
        </Subtitle>
        <Canvas/>
        </BodySheets>
    )
}