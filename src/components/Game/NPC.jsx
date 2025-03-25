import Caterpillar from "./Caterpillar"
import Point from "./Point";

export default class NPC extends Caterpillar {
  constructor(props){
      super(props)
      this.caterpillar = NPC.defaultNPC();
      this.direction = "right";
  }
  static defaultNPC() {
          let defaultPoints = [
              { x: 60, y: 200,}
          ].map((p)=>new Point(p))
          return defaultPoints
      }
  move(food, setFood){
    let newHead;
    let turns=0;
    this.direction=this.findFood(food);
    newHead = this._calculateNewHead()
    while (this.gameOver(newHead)){ 
      if (turns > 3) break;
        this.changeRandomDir()
        newHead = this._calculateNewHead()
        turns++;
    }
    this.caterpillar.unshift(newHead);
    let willEat = this.willEat(food, newHead)
    if (willEat.length){
        food.sources = food.sources.map(source => source.x === newHead.x && source.y === newHead.y ? Point.newRandom('green') : source)
        setFood(food)
    } else {
        this.caterpillar.pop() 
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
    let nearestSource;
    let distanceToSource;
    let direction;
    // iterate to find nearestSource by manhattan distance
    food.sources.forEach(source => { 
      const distance = head.distanceFrom(source);
      if (!nearestSource || distance < distanceToSource) {
        distanceToSource = distance;
        nearestSource = source;
      }});
    direction = this.planDirection(head, nearestSource)
    direction = this.avoidSelf(direction)
    return direction;
  }
  // plan next direction to get closer to nearestSource
    // if snakeNPC is horizontally aligned with the pellet
    // check to see how it should move vertically
    // if snakeNPC is vertically aligned w pellet
    // check to see how it should more horizontally
    // else, check the for the smallest bit of the vector
    // prefer to move in a way that reduces that further
  planDirection(head, nearestSource) {
    let direction;
    let vectorToFood = head.vectorTo(nearestSource)
    if (vectorToFood.x === 0) {
      vectorToFood.y < 0 ? direction = "down" : direction = "up";
    } else if (vectorToFood.y === 0) {
      vectorToFood.x < 0 ? direction = "right" : direction = "left"
    } else if (Math.abs(vectorToFood.x) < Math.abs(vectorToFood.y)) {
      vectorToFood.x < 0 ? direction = "right" : direction = "left"
    } else {
      vectorToFood.y < 0 ? direction = "down" : direction = "up";
    };
    return direction
  }
  avoidSelf(newDirection){
    if (newDirection === "left" && this.direction !== "right") {
      return newDirection;
    } else if (newDirection === "right" && this.direction !== "left") {
      return newDirection;
    } else if (newDirection === "down" && this.direction !== "up") {
      return newDirection;
    } else if (newDirection === "up" && this.direction !== "down") {
      return newDirection
    } else {
      return this.direction
    };
  }
}