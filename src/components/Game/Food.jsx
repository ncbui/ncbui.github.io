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

    /** Receives array */
    refillFood(width,height) {
        while (this.sources.length < 4 ){
            console.log("this.sources.length < 4", this.sources.length)
            this.sources.push(Point.newRandom(width,height, 'green'))
        }
        return
    }
    draw(ctx){
        this.sources.forEach((p) =>{
            p.draw(ctx, 'green')})
    }
  }
  