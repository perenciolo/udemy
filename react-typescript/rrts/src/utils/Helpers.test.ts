import { alphabetArray } from './Helpers';

describe('alphabetArray Function', () => {
  const lettersArr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  test('should create an array with all alphabet letters in lowercase', () => {
    expect(alphabetArray('a', 'Z')).toEqual(lettersArr);
    expect(alphabetArray('A', 'Z')).toEqual(lettersArr);
  });
});
