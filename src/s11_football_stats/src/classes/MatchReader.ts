// classes
import CSVReader, { CSVFileReader } from './CSVReader';

// types
import { MatchResult, MatchData } from '../types/MatchTypes';

// utils
import { getDateFromString } from '../utils/date';

/**
 * Inheritance-based solution with an inheritance approach to load
 * csv file data into the class
 */
class MatchReader extends CSVReader<MatchData> {
  public parseRow = (row: string[]): MatchData => {
    return [
      getDateFromString(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ];
  };
}

export default MatchReader;

/**
 * MatchReader copy with an interface-based approach to load csv data into the class
 */
export interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReaderComp {
  public reader: DataReader;
  public matches: MatchData[] = [];

  constructor(reader: DataReader) {
    this.reader = reader;
  }

  static withCSV = (filename: string): MatchReaderComp => {
    return new MatchReaderComp(new CSVFileReader(filename));
  };

  getData = (): MatchData[] => this.matches;

  load = (): void => {
    this.reader.read();
    this.matches = this.reader.data.map(this.parseRow);
  };

  private parseRow = (row: string[]): MatchData => {
    return [
      getDateFromString(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ];
  };
}
