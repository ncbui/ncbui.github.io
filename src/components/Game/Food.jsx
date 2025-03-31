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
    refill( ) {
        while (this.sources.length < this.num ){
            this.sources.push(Point.newRandom('green'))
        }
        return this
    }
    reset() {
        this.sources = this.sources.map(()=>Point.newRandom('green'))
        return this
    }
    draw(ctx){
        this.sources.forEach((point) => {
            point==undefined ? () => {} : point.draw(ctx, 'green');
        })
    }
  }
  