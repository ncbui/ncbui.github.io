import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {randomRangeTenths} from '../../components/Game/constants';

const WIDTH= 10
const HEIGHT= 20
const SCALE=1

describe('randomRangeTenths', () => {
    beforeEach(() => {
        // vi.spyOn(console, 'log').mockImplementation(() => {});
      });
    
    afterEach(() => {
    // console.log.mockRestore();
    });

    it('returns a number divisible by ten', () => {
        for (let i = 0; i < 100; i++) {
          const val = randomRangeTenths(0, HEIGHT*WIDTH);
          expect(val % 10).toBe(0);
        }
      });
    
});