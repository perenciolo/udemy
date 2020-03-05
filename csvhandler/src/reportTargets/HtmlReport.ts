import fs from 'fs';

import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  constructor(public reportFolder: string, public reportFilename: string) {}

  print(report: string): void {
    const html = `
    <div>
      <h1>Analysis Output</h1>
      <div>${report}</div>
    </div>
    `;

    fs.writeFileSync(
      `${this.reportFolder}/${this.reportFilename.toLocaleLowerCase()}.html`,
      html
    );
  }
}
