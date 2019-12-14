import { OutputTarget } from '../Summary';
import { writeFileSync } from 'fs';

export default class HtmlReport implements OutputTarget {
  print(report: string): void {
    const output = `<div>
  <h1>Analysis Report</h1>
  <div>${report}</div>
</div>`;

    writeFileSync('report.html', output);
  }
}
