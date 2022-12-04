import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) { }

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      // result is in position 5
      const team1: string = match[1];
      const team2: string = match[2];
      const result: string = match[5];
      if (team1 === this.team && result === MatchResult.HomeWIn) {
        wins++;
      } else if (team2 === this.team && result === MatchResult.AwayWin) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }

}