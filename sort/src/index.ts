import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([100, 63, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);

const charactersCollection = new CharactersCollection('abPahaNBA rebecca');
const charSorter = new Sorter(charactersCollection);
charSorter.sort();
console.log(charSorter.collection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-100);
linkedList.add(49);
linkedList.add(31);
linkedList.add(12);
linkedList.add(4);

const linkedSorter = new Sorter(linkedList);
linkedSorter.sort();
linkedList.print();
