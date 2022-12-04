import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const reader = new CsvFileReader('football.csv');
reader.read();
/* 
const homeWin = 'H';
const awayWin = 'A';
const draw = 'D';
 */
/* 
const MatchResult = {
  HomeWIn: 'H',
  AwayWin: 'A',
  Draw: 'D'
}; 
*/

let manUnitedWins = 0;

for (let match of reader.data) {
  // result is in position 5
  const team1: string = match[1];
  const team2: string = match[2];
  const result: string = match[5];
  if (team1 === 'Man United' && result === MatchResult.HomeWIn) {
    manUnitedWins++;
  } else if (team2 === 'Man United' && result === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);