import { describe, it, expect, vi, beforeEach } from 'vitest';
import FoodSources from '../../components/Game/Food';
import Point from '../../components/Game/Point';

// Mock Point.newRandom to return predictable values
vi.mock('./Point', () => ({
  default: vi.fn(),
  newRandom: vi.fn().mockImplementation((color) => ({
    x: 100, y: 100, color: 'green'
  }))
}));

describe('FoodSources', () => {
  let food;
  let mockCtx;

  beforeEach(() => {
    food = new FoodSources();
    mockCtx = {
      fillStyle: '',
      fillRect: vi.fn(),
      strokeRect: vi.fn()
    };
  });

  describe('constructor', () => {
    it('initializes with empty sources and default num', () => {
      expect(food.sources).toEqual([]);
      expect(food.num).toBe(10);
    });
  });
});