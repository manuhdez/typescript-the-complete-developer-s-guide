import Sorter from './classes/Sorter';
import NumbersCollection from './classes/NumbersCollection';
import CharactersCollection from './classes/CharactersCollection';
import LinkedList from './classes/LinkedList';

const numCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numCollection);
sorter.sort();
sorter.printCollection();

const charCollection = new CharactersCollection('ajeZdw');
const charSorter = new Sorter(charCollection);
charSorter.sort();
charSorter.printCollection();

// test linked list sorting
const list = new LinkedList();
list.add(4);
list.add(8);
list.add(2);
list.add(1);

const listSorter = new Sorter(list);
listSorter.sort();
listSorter.printCollection();
