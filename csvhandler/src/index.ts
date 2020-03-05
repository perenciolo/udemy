import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';

const reader = new MatchReader('original.csv');
reader.read();

let manUntdWins = 0;

for (let match of reader.data) {
  if (
    (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  ) {
    manUntdWins++;
  }
}

console.log(`Man United won ${manUntdWins} games`);
