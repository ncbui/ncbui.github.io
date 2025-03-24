import Anaconda from "./Anaconda"
import Point from "./Point";

export default class NPC extends Anaconda {
    constructor(props){
        super(props)
        this.conda = NPC.defaultNPC();
        this.direction = "right";
    }

    static defaultNPC() {
            let defaultPoints = [
                { x: 60, y: 200,},
                { x: 50, y: 200,},
                { x: 40, y: 200,},
                { x: 30, y: 200,},
                { x: 20, y: 200,}
            ].map((p)=>new Point(p))
            return defaultPoints
        }

    move(width, height){
        let newHead;
        newHead = this._calculateNewHead()
        while (newHead.isOutOfBound(width, height)){ 
            this.changeRandomDir()
            newHead = this._calculateNewHead()
        }
        this.conda.unshift(newHead);
        this.conda.pop();
    }

  changeRandomDir(dir = this.direction) {
    if (dir === "up" || dir === "down") Math.random() > .5 ? this.direction = "left" : this.direction = "right";
    if (dir === "left" || dir === "right") Math.random() > .5 ? this.direction = "down" : this.direction = "up";
  }

}