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
        this.num = 10;
    }
    refillFood( ) {
        while (this.sources.length < this.num ){
            this.sources.push(Point.newRandom('green'))
        }
        return this
    }
    resetFood() {
        while (this.sources.length < this.num ){
            this.sources.push('')
        }
        this.sources = this.sources.map(f=>Point.newRandom('green'))
        return this
    }
    draw(ctx){
        this.sources.forEach((p) =>{
            if (p==undefined) return;
            p.draw(ctx, 'green')})
    }
  }
  