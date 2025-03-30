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
    });})