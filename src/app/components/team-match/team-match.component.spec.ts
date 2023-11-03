import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMatchComponent } from './team-match.component';

describe('TeamMatchComponent', () => {
  let component: TeamMatchComponent;
  let fixture: ComponentFixture<TeamMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamMatchComponent]
    });
    fixture = TestBed.createComponent(TeamMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
