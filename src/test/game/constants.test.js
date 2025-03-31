import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {randomRangeTenths, gameOverText, drawCanvas} from '../../components/Game/constants';

const WIDTH= 20
const HEIGHT= 20
const SCALE=5

describe('gameOverText()', () => { 
  let mockContext;

  beforeEach(() => {
    // Create a mock canvas context
    mockContext = {
      textAlign: '',
      fillStyle: '',
      font: '',
      fillText: vi.fn()
    };
  });

  it('sets the correct context properties', () => {
    gameOverText(mockContext);
    expect(mockContext.textAlign).toBe('center');
    expect(mockContext.fillStyle).toBe('white');
    expect(mockContext.font).include('Tourney Variable');
  });
  it('calls fillText twice', () => {
    gameOverText(mockContext);
    expect(mockContext.fillText).toHaveBeenCalledTimes(2)
  });

it('draws "ouch" ', () => {
  gameOverText(mockContext);
  expect(mockContext.fillText).toHaveBeenNthCalledWith(1, 'ouch', expect.any(Number), expect.any(Number))
})
it('draws "ouch" ', () => {
  gameOverText(mockContext);
  expect(mockContext.fillText).toHaveBeenNthCalledWith(2, 'caterpillar is in a bind', expect.any(Number), expect.any(Number))
})

});

describe('randomRangeTenths', () => {
    beforeEach(() => {
        // vi.spyOn(console, 'log').mockImplementation(() => {});
      });
    
    afterEach(() => {
    // console.log.mockRestore();
    });

    it('returns a number divisible by ten', () => {
        for (let i = 0; i < 50; i++) {
          const val = randomRangeTenths(0, HEIGHT*SCALE);
          expect(val % 10).toBe(0);
        }
      });
    it('returns a number within bounds when given number within bounds', () => {
      for (let i = 0; i < 50; i++) {
        const val = randomRangeTenths(0, HEIGHT*SCALE);
        expect(val).toBeGreaterThanOrEqual(0);
        expect(val).toBeLessThanOrEqual(HEIGHT * SCALE);
      }
    })
});


describe('drawCanvas', () => {
  it('clears the canvas and saves context state', () => {
    const mockContext = {
      width: 800,
      height: 600,
      save: vi.fn(),
      clearRect: vi.fn()
    };
    drawCanvas(mockContext);
    expect(mockContext.save).toHaveBeenCalledTimes(1);
    expect(mockContext.clearRect).toHaveBeenCalledWith(0, 0, mockContext.width, mockContext.height);
  });

  it('works with different canvas sizes', () => {
    const mockContext = {
      width: 1024,
      height: 768,
      save: vi.fn(),
      clearRect: vi.fn()
    };
    drawCanvas(mockContext);
    expect(mockContext.clearRect).toHaveBeenCalledWith(0, 0, 1024, 768);
  });
});