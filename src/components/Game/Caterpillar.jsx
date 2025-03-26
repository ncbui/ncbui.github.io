import Point from "./Point";
/** Caterpillar. Central actor in game: moves, eats, and grows.
 *
 * @param caterpillar - an array of Points in the Caterpillar
 * @param direction - direction caterpillar is currently moving in: right, left, up, down
 *
 **/
export default class Caterpillar {
    constructor() {
        this.caterpillar = Caterpillar.defaultCaterpillar(); // list of Points() in caterpillar body
        this.direction = "down"; // direction of travel
      }

    static defaultCaterpillar() {
        let defaultPoints = [
            { x: 60, y: 60,},
        ].map((p)=>new Point(p))
        return defaultPoints
    }
      
    head() {
    return this.caterpillar[0];
    }

    draw(ctx){
        this.caterpillar.forEach((p) =>{
            p.draw(ctx)})
    }

    move(){
        let newHead;
        newHead = this._calculateNewHead()
        this.caterpillar.unshift(newHead);
        this.caterpillar.pop();
    }
    /** Returns true if point matches with caterpillar parts */
    contains(point){
        return this.caterpillar.some(part => part.x === point.x && part.y === point.y);
    }
    /** Returns true if point matches with caterpillar parts */
    checkEatSelf(head=this.head()){
        let body=this.caterpillar.slice(1)
        return body.some(part => part.x === head.x && part.y === head.y);
    }
    checkOutOfBounds(head=this.head()){
        return head.isOutOfBound()
    }
    gameOver(newHead){
        return this.checkOutOfBounds(newHead) || this.checkEatSelf(newHead)
    }
    _calculateNewHead(currentHead = this.head()) {
    let newHead;
        if (this.direction == "right") {
            newHead = new Point({x: currentHead.x + 10, y: currentHead.y + 0})
        } else if (this.direction == "left") {
            newHead = new Point({x: currentHead.x - 10, y: currentHead.y +0})
        } else if (this.direction == "down") {
            newHead = new Point({x: currentHead.x + 0, y: currentHead.y +10})
        } else if (this.direction == "up") {
            newHead = new Point({x: currentHead.x + 0, y: currentHead.y -10})
        } else { 
            newHead = this.head()}
    return newHead;
    }
}