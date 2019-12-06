import Sorter from './classes/Sorter';
import NumbersCollection from './classes/NumbersCollection';
import CharactersCollection from './classes/CharactersCollection';

const numCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numCollection);
sorter.sort();
sorter.printCollection();

const charCollection = new CharactersCollection('ajezdw');
const charSorter = new Sorter(charCollection);
charSorter.sort();
charSorter.printCollection();
