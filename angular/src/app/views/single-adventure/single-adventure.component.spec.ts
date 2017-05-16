import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAdventureComponent } from './single-adventure.component';

describe('SingleAdventureComponent', () => {
  let component: SingleAdventureComponent;
  let fixture: ComponentFixture<SingleAdventureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAdventureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
