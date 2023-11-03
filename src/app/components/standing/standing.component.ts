import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription, switchMap, of, Observable, map } from 'rxjs';
import { Standings, Standing } from 'src/app/models/leagues';
import { StandingService } from 'src/app/services/standing.service';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css']
})
export class StandingComponent implements OnInit, OnDestroy {
  standings: Standings[][] | null = null;
  standingSubscription$?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private standingService: StandingService
  ) {}

  ngOnInit() {
    this.standingSubscription$ = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let countryId = +params.get('countryId')!;
          if (countryId) {
            let httpParams = new HttpParams({
              fromObject: {
                league: countryId,
                season: new Date().getFullYear().toString(),
              },
            });
            return this.leagueStanding(httpParams);
          }
          return of(null);
        })
      )
      .subscribe({
        next: this.standingMap.bind(this),
        error: this.errorMap.bind(this),
      });
  }

   standingMap(data: Standing | null) {
    if (!!data?.response && !!data.response[0]?.league?.standings) {
      this.standings = [data.response[0].league.standings][0];
    }
  }

   errorMap(error: Error) {
    console.error('Error', error);
  }

  leagueStanding(httpParams: HttpParams): Observable<Standing | null> {
    return this.standingService.getLeagueStanding(httpParams).pipe(
      map((data: Standing) => {
        return data;
      })
    );
  }

  ngOnDestroy(): void {
    if (this.standingSubscription$) {
      this.standingSubscription$.unsubscribe();
    }
  }
}

