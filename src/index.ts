import { MatchReader } from './inheritance/MatchReader';
import { CsvFileReader } from "./CsvFileReader.start";
import { MatchResult } from "./MatchResult";
import { CsvFileReaderInt } from './CsvFileReaderInt';
import { MatchReader as MatchReaderInt } from './MatchReader';
import { match } from 'assert';

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
// bad any, but just for test..
const countManWins = (data: any): void => {
  let manUnitedWins = 0;

  for (let match of data) {
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
}

countManWins(reader.data);

//
console.log('Solution with generics..');
const genericReader = new MatchReader('football.csv');
genericReader.read();

countManWins(genericReader.data);

// 
console.log('Solution with interfaces..');
/* const csvFileReader: CsvFileReaderInt = new CsvFileReaderInt('football.csv');

const matchReader = new MatchReaderInt(csvFileReader); */
const matchReader = MatchReaderInt.fromCsv('football.csv');
matchReader.load();
countManWins(matchReader.matches);


console.log('Now let go with the final composition!');

import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);


// html report
const htmlSummary = Summary.winsAnalysisWithHtmlReport('Man United', 'report.html');

htmlSummary.buildAndPrintReport(matchReader.matches);