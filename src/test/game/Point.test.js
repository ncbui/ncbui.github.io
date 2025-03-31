import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Point from '../../components/Game/Point';

const WIDTH= 20
const HEIGHT= 20
const SCALE=5

describe('Point class', () => {
    beforeEach(() => {
        vi.spyOn(console, 'log').mockImplementation(() => {});
      });
    
    afterEach(() => {
    console.log.mockRestore();
    });

    describe('constructor()', () => {
        it('initializes with correct x, y, and color', () => {
            const point = new Point({ x: 10, y: 20, color: 'red'});
            expect(point.x).toBe(10);
            expect(point.y).toBe(20);
            expect(point.color).toBe('red');
          });
        it('returns error when plot points type not number', () => {
            expect(()=> new Point({ x: 'red', y: 10, color: 'yellow'})).toThrow('x must be a number');
            expect(()=> new Point({ x: undefined, y: 10, color: 'yellow'})).toThrow('x must be a number');
            expect(()=> new Point({ x: 10, y: 'red', color: 'yellow'})).toThrow('y must be a number');
            expect(()=> new Point({ x: 10, y: undefined, color: 'yellow'})).toThrow('y must be a number');
        });
    })

    describe('newRandom()', () => {
        it('generates a point within canvas', () => {
            const randomPoint = Point.newRandom('purple', WIDTH * SCALE, HEIGHT * SCALE);
            expect(randomPoint.x).toBeGreaterThanOrEqual(10);
            expect(randomPoint.x).toBeLessThanOrEqual(Math.floor(WIDTH * SCALE / 10) * 10);
            expect(randomPoint.y).toBeGreaterThanOrEqual(10);
            expect(randomPoint.y).toBeLessThanOrEqual(Math.floor(HEIGHT * SCALE / 10) * 10);
            expect(randomPoint.color).toBe('purple');
          });
        })
        it('generates 100 points within canvas', () => {
            for (let i = 0; i < 50; i++){
                const randomPoint = Point.newRandom('purple', WIDTH * SCALE, HEIGHT * SCALE);
                expect(randomPoint.x).toBeGreaterThanOrEqual(10);
                expect(randomPoint.x).toBeLessThanOrEqual(Math.floor(WIDTH * SCALE / 10) * 10);
                expect(randomPoint.y).toBeGreaterThanOrEqual(10);
                expect(randomPoint.y).toBeLessThanOrEqual(Math.floor(HEIGHT * SCALE / 10) * 10);
                expect(randomPoint.color).toBe('purple');
            }
        })

    describe('draw()', () => {
    it(' sets styles and calls canvas methods', () => {
        const ctx = {
          fillStyle: '',
          strokestyle: '',
          fillRect: vi.fn(),
          strokeRect: vi.fn(),
        };
        const point = new Point({ x: 20, y: 30, color: 'orange'});
        point.draw(ctx);
    
        expect(ctx.fillStyle).toBe('orange');
        expect(ctx.strokestyle).toBe('orange');
        expect(ctx.fillRect).toHaveBeenCalledWith(20, 30, 10, 10);
        expect(ctx.strokeRect).toHaveBeenCalledWith(20, 30, 2, 1);
      });
    })

    describe('isOutOfBound()', () => {
        it('returns false for in-bound points',() => {
            const point = new Point({ x: 50, y: 50 });
            expect(point.isOutOfBound()).toBe(false);
        })
        it('returns false for points on edge of canvas',() => {
            const point = new Point({ x: 10, y: HEIGHT*SCALE });
            expect(point.isOutOfBound()).toBe(false);
        })
        it('returns true for point off canvas',() => {
            const outOfBoundsPoint = new Point({ x: -WIDTH*SCALE, y: -HEIGHT*SCALE });
            expect(outOfBoundsPoint.isOutOfBound()).toBe(true);
        })
        it('returns true when point off canvas',() => {
            const outOfBoundsPointTwo = new Point({ x: -1*WIDTH, y: HEIGHT });
            expect(outOfBoundsPointTwo.isOutOfBound()).toBe(true);
        })
    });

    describe('distanceFrom()', () => { 
        it(' calculates Manhattan distance', () => {
            const pointA = new Point({ x: 0, y: 0 });
            const pointB = new Point({ x: 3, y: 4 });
            expect(pointA.distanceFrom(pointB)).toBe(7); // |3-0| + |4-0| = 7
        });
        // edgecases
    });
    
    describe('vectorTo()', () => {  
        it('returns a vector', () => {
            const pointA = new Point({ x: 0, y: 0 });
            const pointB = new Point({ x: 10, y: 40 });
            expect(pointA.vectorTo(pointB)).toStrictEqual({ 'x': -10, 'y': -40,}); // |3-0| + |4-0| = 7
        })
        // edgecases
    });
})