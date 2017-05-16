import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDarkComponent } from './nav-dark.component';

describe('NavDarkComponent', () => {
  let component: NavDarkComponent;
  let fixture: ComponentFixture<NavDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
