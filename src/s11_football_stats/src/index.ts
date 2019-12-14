import { MatchReaderComp } from './classes/MatchReader';
import { CSVFileReader } from './classes/CSVReader';
import Summary from './classes/Summary';
import ConsoleReport from './classes/reportTargets/ConsoleReport';
import WinsAnalyzer from './classes/analyzers/WinsAnalyzer';

// create an object that satisfies the 'DataReader' interface
const fileReader = new CSVFileReader('football.csv');

// create an instance of 'MatchReader' and pass it a valid 'DataReader'
const matchReader = new MatchReaderComp(fileReader);
matchReader.load();

// create an instance of 'Summary' and pass a valid 'Analyzer' and a valid 'OutpuTarget'
const summary = new Summary(new WinsAnalyzer('Tottenham'), new ConsoleReport());

summary.buildAndPrintReport(matchReader.matches);
