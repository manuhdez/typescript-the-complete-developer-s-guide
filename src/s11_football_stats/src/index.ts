import CSVReader from './classes/CSVReader';
import MatchResult from './MatchResult';

const reader = new CSVReader('football.csv');
reader.read();

let manUnitedWins = 0;
for (let match of reader.getData()) {
  if (
    (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  ) {
    manUnitedWins++;
  }
}

console.log({ manUnitedWins });
