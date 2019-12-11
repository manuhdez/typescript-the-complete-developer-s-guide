// classes
import CSVReader from './CSVReader';

// types
import { MatchResult, MatchData } from '../types/MatchTypes';

// utils
import { getDateFromString } from '../utils/date';

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
