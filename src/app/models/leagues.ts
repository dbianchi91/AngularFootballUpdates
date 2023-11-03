export interface Standing {
    get: string;
    parameters: StandingParameters;
    errors?: null[] | null;
    results: number;
    paging: Paging;
    response?: ResponseStanding[] | null;
  }
  export interface StandingParameters {
    league: string;
    season: string;
  }
  export interface Paging {
    current: number;
    total: number;
  }
  export interface ResponseStanding {
    league: League;
  }
  export interface League {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    standings?: Standings[][] | null;
  }
  
  export class Standings {
    rank?: number;
    team?: Team;
    points?: number;
    goalsDiff?: number;
    group?: string;
    form?: string;
    status?: string;
    description?: string;
    all?: Games;
    home?: Games;
    away?: Games;
    update?: string;
  }
  
  export interface Team {
    id: number;
    name: string;
    logo: string;
  }
  export interface Games {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: Goals;
  }
  export interface Goals {
    for: number;
    against: number;
  }
  