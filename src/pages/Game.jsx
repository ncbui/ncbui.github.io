// import { SnakeCanvas } from "./snakeCanvas";
import Canvas from "../components/Game/canvas";
import { theme, BodySheets, NavTitleText, Subtitle } from "../template/theme";

export default function Game () { 
    return (
      <BodySheets>
        <NavTitleText>
            Hungry Hungry Caterpillar 
            </NavTitleText>
        <NavTitleText sx={{fontStyle: 'italic', fontWeight:'600', fontSize: '1rem', marginLeft:'1rem', color: theme.palette.text}}>
        Built with React, requestAnimationFrame, and HTML Canvas
        </NavTitleText>
        <NavTitleText sx={{fontStyle: 'italic', fontWeight:'600', fontSize: '1rem', marginLeft:'1rem', color: theme.palette.text}}>
        Hatch a hungry caterpillar. Eat well. Live long and prosper.
        </NavTitleText>
        <Subtitle sx={{width:'30rem', margin: '.5rem 1rem'}}>
            Press `start` to hatch a caterpillar. This hatchling sometimes gets stuck. Press the reset food button try to draw the hatchling in a new direction. 
        </Subtitle>
        <Canvas/>
        </BodySheets>
    )
}