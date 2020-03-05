import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([100, 63, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('abPahaNBA rebecca');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-100);
linkedList.add(49);
linkedList.add(31);
linkedList.add(12);
linkedList.add(4);

linkedList.sort();
linkedList.print();
