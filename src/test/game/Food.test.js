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

  describe('refill()', () => {
    it('populates empty source list until length reaches default num', () => {
        food.refill()
      expect(food.sources.length).toEqual(10);
      expect(food.num).toBe(10);
    });
    it('populates partial source list until length reaches default num', () => {
        food.refill()
        food.sources = food.sources.slice(0,3)
        expect(food.sources.length).toEqual(3);
        food.refill()
        expect(food.sources.length).toEqual(10);
    });
    it('does not alter full lists', () => {
        let setA;
        let setB;
        food.refill()
        setA = food.sources
        food.refill()
        setB = food.sources
        expect(setA).toEqual(setB)
    })
  });

  describe('reset()', () => {
    it('populates empty source list until length reaches default num', () => {
        food.reset()
      expect(food.sources.length).toEqual(10);
      expect(food.num).toBe(10);
    });
    it('alters full lists', () => {
        let setA;
        let setB;
        food.reset()
        setA = food.sources
        food.reset()
        setB = food.sources
        expect(setA).not.toEqual(setB)
    })
  });
});