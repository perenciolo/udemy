import fs from 'fs';
import { MatchData } from './MatchReader';

export abstract class CsvFileReader {
  public data: MatchData[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): MatchData;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((line: string): string[] => line.split(','))
      .map(this.mapRow);
  }
}
