import Point from "./Point";
import {WIDTH,HEIGHT,SCALE} from './constants'
/** Food. List of food sources
 *
 * @param food - an array of Points currently growing food
 * @param num - number of food sources
 *
 **/
export default class FoodSources {
    constructor() {
        this.sources = [];
        this.num = 8;
    }
    refillFood( ) {
        while (this.sources.length < this.num ){
            this.sources.push(Point.newRandom('green'))
        }
        return this
    }
    resetFood() {
        this.sources = this.sources.map(() => Point.newRandom('green'))
        return this
    }
    draw(ctx){
        this.sources.forEach((p) =>{
            p.draw(ctx, 'green')})
    }
  }
  