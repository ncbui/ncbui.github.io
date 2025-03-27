import Canvas from "../components/Game/Canvas";
import { BodySheets, GameTitleText,GameSubtitleText, GameFooterText, GameDescription } from "../template/theme";

export default function Game () { 
    return (
      <BodySheets>
        <GameTitleText>
            Hungry Hungry Caterpillar 
        </GameTitleText>
        <GameSubtitleText>
            Built with requestAnimationFrame, HTML Canvas, and React
        </GameSubtitleText>
        <GameDescription>
            Press `Start` to hatch a hungry caterpillar. Press the reset food button try to draw the hatchling in a new direction. 
        </GameDescription>
        <Canvas/>
        <GameFooterText>
            Eat well. Live long and prosper.
        </GameFooterText>
        </BodySheets>
    )
}