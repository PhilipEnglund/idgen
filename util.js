const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

// Permutations based on alphabet above
export const SIZE_TWO_PERMUTATIONS = 3844; // e.g x6, k2, aa, de
export const SIZE_THREE_PERMUTATIONS = 238328; // e.g k8s, 12d, das, 21f

// We need to know what size the next generated shorthand should be, which is possible when knowing how many
// is already generated and how many permutations are in each size
export const getNextSize = (idsCount) => {
  return idsCount > SIZE_TWO_PERMUTATIONS ? 3 : 2;
};

export const getAlphabet = () => {
  return ALPHABET;
};