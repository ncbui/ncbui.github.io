import { describe, it, expect, vi } from 'vitest';
import Point from '../../components/Game/Point';

const WIDTH = 100;
const HEIGHT = 100;
const SCALE = 1;

describe('Point class', () => {
    // Test constructor and properties
    it('initializes with correct x, y, and color', () => {
      const point = new Point({ x: 5, y: 10 }, 'red');
      expect(point.x).toBe(5);
      expect(point.y).toBe(10);
      expect(point.color).toBe('red');
    });})