import fs from 'fs';

// types
import MatchResult from '../MatchResult';

// utils
import { getDateFromString } from '../utils/date';

type MatchData = [Date, string, string, number, number, MatchResult, string];

class CSVReader {
  private filename: string;
  private data: MatchData[] = [];

  constructor(filename: string) {
    this.filename = filename;
  }

  getData = () => this.data;

  set updateFilename(newFilename: string) {
    this.filename = newFilename;
  }

  read = (): void => {
    const { filename } = this;

    this.data = fs
      .readFileSync(filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row: string[]): MatchData => this.parseRowValues(row));
  };

  private parseRowValues = (row: string[]): MatchData => {
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

export default CSVReader;
