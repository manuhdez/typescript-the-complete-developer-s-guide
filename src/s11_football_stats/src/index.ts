import MatchReader from './classes/MatchReader';
import { MatchResult } from './types/MatchTypes';

const reader = new MatchReader('football.csv');
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
