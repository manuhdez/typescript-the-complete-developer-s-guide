import Sorter from './classes/Sorter';
import NumbersCollection from './classes/NumbersCollection';

const collection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(collection);
sorter.sort();
sorter.printCollection();
