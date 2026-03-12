import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nouveautes } from './nouveautes';

describe('Nouveautes', () => {
  let component: Nouveautes;
  let fixture: ComponentFixture<Nouveautes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nouveautes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nouveautes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
