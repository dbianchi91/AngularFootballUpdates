export interface FixtureResponse {
    get: string;
    parameters: FixtureParameters;
    errors?: null[] | null;
    results: number;
    paging: Paging;
    response?: Fixture[] | null;
  }
  
  export interface FixtureParameters {
    team: string;
    last: string;
  }
  
  export interface Paging {
    current: number;
    total: number;
  }
  
  export interface Fixture {
    fixture: FixtureInfo;
    league: League;
    teams: FixtureTeams;
    goals: FixtureGoals;
    score: FixtureScore;
  }
  
  export interface FixtureInfo {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: FixturePeriods;
    venue: FixtureVenue;
    status: FixtureStatus;
  }
  
  export interface FixturePeriods {
    first: number;
    second: number;
  }
  
  export interface FixtureVenue {
    id: number;
    name: string;
    city: string;
  }
  
  export interface FixtureStatus {
    long: string;
    short: string;
    elapsed: number;
  }
  
  export interface League {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  }
  
  export interface FixtureTeams {
    home: FixtureTeam;
    away: FixtureTeam;
  }
  
  export interface FixtureTeam {
    id: number;
    name: string;
    logo: string;
    winner: boolean;
  }
  
  export interface FixtureGoals {
    home: number;
    away: number;
  }
  
  export interface FixtureScore {
    halftime: FixtureScoreHalf;
    fulltime: FixtureScoreFull;
    extratime: FixtureScoreExtra;
    penalty: FixtureScorePenalty;
  }
  
  export interface FixtureScoreHalf {
    home: number;
    away: number;
  }
  
  export interface FixtureScoreFull {
    home: number;
    away: number;
  }
  
  export interface FixtureScoreExtra {
    home: number | null;
    away: number | null;
  }
  
  export interface FixtureScorePenalty {
    home: number | null;
    away: number | null;
  }
  