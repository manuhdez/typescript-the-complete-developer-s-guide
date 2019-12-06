import NumbersCollection from './classes/NumbersCollection';
import CharactersCollection from './classes/CharactersCollection';
import LinkedList from './classes/LinkedList';

// test numbers collection
const numCollection = new NumbersCollection([10, 3, -5, 0]);
numCollection.sort();
numCollection.print();

// test characters collection
const charCollection = new CharactersCollection('ajeZdw');
charCollection.sort();
charCollection.print();

// test linked list sorting
const list = new LinkedList();
list.add(4);
list.add(8);
list.add(2);
list.add(1);
list.sort();
list.print();
