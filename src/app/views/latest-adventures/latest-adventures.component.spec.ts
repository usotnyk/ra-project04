import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAdventuresComponent } from './latest-adventures.component';

describe('LatestAdventuresComponent', () => {
  let component: LatestAdventuresComponent;
  let fixture: ComponentFixture<LatestAdventuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestAdventuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestAdventuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
