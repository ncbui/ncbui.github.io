import { describe, it, expect, vi } from 'vitest';
import Point from '../../components/Game/Point';

const WIDTH = 100;
const HEIGHT = 100;
const SCALE = 1;

describe('Point class', () => {
    // Test constructor and properties
    it('initializes with correct x, y, and color', () => {
      const point = new Point({ x: 10, y: 20, color: 'red'});
      expect(point.x).toBe(10);
      expect(point.y).toBe(20);
      expect(point.color).toBe('red');
    });
    
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
})