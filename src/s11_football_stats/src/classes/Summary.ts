import { MatchData } from '../types/MatchTypes';
import WinsAnalyzer from './analyzers/WinsAnalyzer';
import HtmlReport from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export default class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static winsAnalysisAndHtmlReport = (teamName: string): Summary => {
    return new Summary(new WinsAnalyzer(teamName), new HtmlReport());
  };

  buildAndPrintReport = (matches: MatchData[]) => {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  };
}
