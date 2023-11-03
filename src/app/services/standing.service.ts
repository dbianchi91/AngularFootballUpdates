import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FixtureResponse } from '../models/fixtures';
import { Standing } from '../models/leagues';


const enum endpoint {
  standings = '/standings',
  fixtures = '/fixtures',
}

@Injectable({
  providedIn: 'root'
})
export class StandingService {

  private URL = 'https://v3.football.api-sports.io';
  private API_KEY = '03244bec09d17433caa2e3044300f0ba';

  private cachedStanding$: Observable<Standing> | null = null;
  private cachedFixtures$: Observable<FixtureResponse> | null = null;

  private headers = new HttpHeaders({
    'x-rapidapi-key': this.API_KEY,
  });

  constructor(private http: HttpClient) {}

  getLeagueStanding(httpParams: HttpParams): Observable<Standing> {
    return this.http.get<Standing>(`${this.URL}${endpoint.standings}`, {
      headers: this.headers,
      params: httpParams,
    });
  }

  getFixtures(httpParams: HttpParams): Observable<FixtureResponse> {
    return this.http.get<FixtureResponse>(`${this.URL}${endpoint.fixtures}`, {
      headers: this.headers,
      params: httpParams,
    });
  }

  // getLeagueStanding(httpParams: HttpParams): Observable<Standing> {
  //   if (!this.cachedStanding$) {
  //     this.cachedStanding$ = this.http
  //       .get<Standing>(`${this.URL}${endpoint.standings}`, {
  //         headers: this.headers,
  //         params: httpParams,
  //       })
  //       .pipe(shareReplay(1));
  //   }
  //   return this.cachedStanding$;
  // }

  // getFixtures(httpParams: HttpParams): Observable<FixtureResponse> {
  //   if (!this.cachedFixtures$) {
  //     this.cachedFixtures$ = this.http
  //       .get<FixtureResponse>(`${this.URL}${endpoint.fixtures}`, {
  //         headers: this.headers,
  //         params: httpParams,
  //       })
  //       .pipe(shareReplay(1));
  //   }
  //   return this.cachedFixtures$;
  // }
}
