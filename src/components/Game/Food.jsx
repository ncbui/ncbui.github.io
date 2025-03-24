import Point from "./Point";
/** Food. List of food sources
 *
 * @param food - an array of Points currently growing food
 * @param num - number of food sources
 *
 **/
export default class FoodSources {
    constructor() {
        this.sources = [];
        this.num = 4;
    }
    refillFood(width,height) {
        while (this.sources.length < this.num ){
            this.sources.push(Point.newRandom(width,height, 'green'))
        }
        return this
    }
    draw(ctx){
        this.sources.forEach((p) =>{
            p.draw(ctx, 'green')})
    }
  }
  