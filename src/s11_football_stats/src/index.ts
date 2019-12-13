import MatchReader, { MatchReaderComp } from './classes/MatchReader';
import { CSVFileReader } from './classes/CSVReader';
import { MatchResult, MatchData } from './types/MatchTypes';

function countMatchesWon(data: MatchData[], team: string): void {
  let teamWins = 0;
  for (let match of data) {
    if (
      (match[1] === team && match[5] === MatchResult.HomeWin) ||
      (match[2] === team && match[5] === MatchResult.AwayWin)
    ) {
      teamWins++;
    }
  }

  console.log(`${team} won ${teamWins} games.`);
}

const reader = new MatchReader('football.csv');
reader.read();
countMatchesWon(reader.getData(), 'Man United');

const fileReader = new CSVFileReader('football.csv');
const reader_2 = new MatchReaderComp(fileReader);
reader_2.load();
countMatchesWon(reader_2.getData(), 'Liverpool');
