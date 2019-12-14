import { MatchData } from '../types/MatchTypes';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export default class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport = (matches: MatchData[]) => {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  };
}
