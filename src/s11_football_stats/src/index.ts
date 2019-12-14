import MatchReader, { MatchReaderComp } from './classes/MatchReader';
import { CSVFileReader } from './classes/CSVReader';
// import { MatchResult, MatchData } from './types/MatchTypes';

const reader = new MatchReader('football.csv');
reader.read();
// countMatchesWon(reader.getData(), 'Man United');

const fileReader = new CSVFileReader('football.csv');
const reader_2 = new MatchReaderComp(fileReader);
reader_2.load();
// countMatchesWon(reader_2.getData(), 'Liverpool');
