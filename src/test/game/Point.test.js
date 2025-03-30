import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Point from '../../components/Game/Point';

const WIDTH = 100;
const HEIGHT = 100;
const SCALE = 1;

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
        it('console.logs when color type is not string', () => {
            new Point({ x: 10, y: 20, color: 10});
            expect(console.log).toHaveBeenCalledWith("color set to default");
            expect(console.log).toHaveBeenCalledTimes(1);
            new Point({ x: 10, y: 20, color: undefined});
            expect(console.log).toHaveBeenCalledWith("color set to default");
            expect(console.log).toHaveBeenCalledTimes(1);
        });
    })


    it('draw() sets styles and calls canvas methods', () => {
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

    it('distanceFrom() calculates Manhattan distance', () => {
        const pointA = new Point({ x: 0, y: 0 });
        const pointB = new Point({ x: 3, y: 4 });
        expect(pointA.distanceFrom(pointB)).toBe(7); // |3-0| + |4-0| = 7
      });
})