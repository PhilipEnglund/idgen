import { SIZE_THREE_PERMUTATIONS } from './util.js';

// Mock request to database to get current count of already generated shorthands
export const getGeneratedShorthandsCount = () => {
   return (Math.floor(Math.random() * SIZE_THREE_PERMUTATIONS));
};

