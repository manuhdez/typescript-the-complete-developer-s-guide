import { OutputTarget } from '../Summary';

export default class ConsoleReport implements OutputTarget {
  print = (report: string): void => {
    console.log(report);
  };
}
