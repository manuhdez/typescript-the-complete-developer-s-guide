import CSVReader from './classes/CSVReader';

const reader = new CSVReader('football.csv');
reader.read();

enum matchResults {
  homeWin = 'H',
  awayWin = 'A',
  draw = 'D'
}

let manUnitedWins = 0;
for (let match of reader.getData()) {
  if (
    (match[1] === 'Man United' && match[5] === matchResults.homeWin) ||
    (match[2] === 'Man United' && match[5] === matchResults.awayWin)
  ) {
    manUnitedWins++;
  }
}

console.log({ manUnitedWins });
