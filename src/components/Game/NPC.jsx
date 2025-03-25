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
    move(food, setFood, width, height){
      let newHead;
      const toClosestFood = this.findFood(food);

      if (toClosestFood === "left" && this.direction !== "right") {
        this.direction = toClosestFood;
      } else if (toClosestFood === "right" && this.direction !== "left") {
        this.direction = toClosestFood;
      } else if (toClosestFood === "down" && this.direction !== "up") {
        this.direction = toClosestFood;
      } else if (toClosestFood === "up" && this.direction !== "down") {
        this.direction = toClosestFood
      };

      newHead = this._calculateNewHead()
      if (newHead.isOutOfBound(width, height) || this.contains(newHead)){ 
          this.changeRandomDir()
          newHead = this._calculateNewHead()
      }
      this.conda.unshift(newHead);
      let willEat = this.willEat(food, newHead)
      if (willEat.length){
          food.sources = food.sources.map(source => source.x === newHead.x && source.y === newHead.y ? Point.newRandom(width,height, 'green') : source)
          setFood(food)
      } else {
          this.conda.pop() 
      }
    }
  changeRandomDir(dir = this.direction) {
    if (dir === "up" || dir === "down") Math.random() > .5 ? this.direction = "left" : this.direction = "right";
    if (dir === "left" || dir === "right") Math.random() > .5 ? this.direction = "down" : this.direction = "up";
  }
  /**Returns true if newHead matches a source of food */
  willEat(food, newHead) {
    let pellet = food.sources.filter(source => source.x === newHead.x && source.y === newHead.y)
    return pellet
  }

  findFood(food, head = this.head()) {
    let nearestPellet;
    let dToPellet;
    console.log("food", food);

    food.sources.forEach(source => {
      const distance = head.distanceFrom(source);

      if (!nearestPellet || distance < dToPellet) {
        dToPellet = distance;
        nearestPellet = source;
      }
    });

    let vector = head.vectorTo(nearestPellet);

    let newDirs;

    // if snakeNPC is horizontally aligned with the pellet
    // check to see how it should move vertically
    // if snakeNPC is vertically aligned w pellet
    // check to see how it should more horizontally
    // else, check the for the smallest bit of the vector
    // prefer to move in a way that reduces that further

    if (vector.x === 0) {
      vector.y < 0 ? newDirs = "down" : newDirs = "up";
    } else if (vector.y === 0) {
      vector.x < 0 ? newDirs = "right" : newDirs = "left"
    } else if (Math.abs(vector.x) < Math.abs(vector.y)) {
      vector.x < 0 ? newDirs = "right" : newDirs = "left"
    } else {
      vector.y < 0 ? newDirs = "down" : newDirs = "up";
    };



    return newDirs;
  }
  
}