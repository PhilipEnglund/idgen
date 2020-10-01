import { customRandom } from 'nanoid';
import seedrandom from 'seedrandom';
import { getGeneratedShorthandsCount } from './idService.js';
import { getNextSize, getAlphabet } from './util.js';

// Get the current count of generated shorthands
// and what the size of the next generated shorthand should be
const currentShorthandsCount = getGeneratedShorthandsCount();
const nextSize = getNextSize(currentShorthandsCount);

// The seed could be anything really, but it needs to be
// static and not to be touched, ever, for this to work.
const rng = seedrandom('@@tretton37@@');

// Get the alphabet that's being used in the generator.
const alphabet = getAlphabet();

// Create a random id generator with seed and alphabet above
const nanoid = customRandom(alphabet, nextSize, size => {
  return (new Uint8Array(size).map(() => 256 * rng()));
})

let id = 'undefined';

const uniques = new Set();

// Because the seed is static, we can just iterate until we get the same count in uniques
// as shorthands already generated, and just take the next unique value from the
// generator. i.e. if the 200th generated shorthand is 'u7', the 199th slot in uniques
// will always have the value 'u7'
let iterationsCount = 0;
while (true){
    const shorthand = nanoid();
    uniques.add(shorthand);
    if(uniques.size === currentShorthandsCount + 1){
      id = shorthand;
      break;
    }
    iterationsCount++;
}
console.log('=========================');
console.log(`    Already generated shorthands: ${currentShorthandsCount}`);
console.log('=========================');
console.log('=========================');
console.log(`    Iterations: ${iterationsCount}`);
console.log('=========================\n');
console.log('=========================');
console.log(`    Next Id for shorthand: https://1337co.de/${id}`);
console.log('=========================');

