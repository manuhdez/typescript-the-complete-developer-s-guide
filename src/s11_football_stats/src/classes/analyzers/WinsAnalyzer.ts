import { Analyzer } from '../Summary';
import { MatchData, MatchResult } from '../../types/MatchTypes';

export default class WinsAnalyzer implements Analyzer {
  constructor(public teamName: string) {}

  public run = (matches: MatchData[]): string => {
    let teamWins = 0;

    for (let match of matches) {
      if (
        (match[1] === this.teamName && match[5] === MatchResult.HomeWin) ||
        (match[2] === this.teamName && match[5] === MatchResult.AwayWin)
      ) {
        teamWins++;
      }
    }

    return `${this.teamName} won ${teamWins} games.`;
  };
}
