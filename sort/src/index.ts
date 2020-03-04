import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([100, 63, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);

const charactersCollection = new CharactersCollection('abPahaNBA rebecca');
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log(charSorter.collection);
