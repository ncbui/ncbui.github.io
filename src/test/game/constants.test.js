import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {randomRangeTenths} from '../../components/Game/constants';

const WIDTH= 20
const HEIGHT= 20
const SCALE=5

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