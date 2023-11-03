import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription, switchMap, of, Observable, map } from 'rxjs';
import { Fixture, FixtureResponse } from 'src/app/models/fixtures';
import { Location } from '@angular/common';
import { StandingService } from 'src/app/services/standing.service';

@Component({
  selector: 'app-team-match',
  templateUrl: './team-match.component.html',
  styleUrls: ['./team-match.component.css']
})

export class TeamMatchComponent implements OnInit, OnDestroy {
  teamMatchData?: Fixture[] | null;
  matchSubscription$?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private standingService: StandingService,
    private location: Location
  ) {}

  ngOnInit() {
    this.matchSubscription$ = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let selectedTeamId = +params.get('teamId')!;
          if (selectedTeamId) {
            let httpParams = new HttpParams({
              fromObject: {
                team: selectedTeamId,
                last: 10,
              },
            });
            return this.getFixtures(httpParams);
          }
          return of(null);
        })
      )
      .subscribe({
        next: this.matchMap.bind(this),
        error: this.errorMap.bind(this),
      });
  }

   matchMap(data: FixtureResponse | null) {
    this.teamMatchData = data?.response;
  }

   errorMap(error: Error) {
    console.error('Errorin HTTP', error);
  }

  getFixtures(httpParams: HttpParams): Observable<FixtureResponse | null> {
    return this.standingService.getFixtures(httpParams).pipe(
      map((data: FixtureResponse) => {
        return data;
      })
    );
  }

  goBackToStanding() {
    this.location.back();
  }

  ngOnDestroy(): void {
    if (this.matchSubscription$) {
      this.matchSubscription$.unsubscribe();
    }
  }
}
