import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysoComponent } from './dayso.component';

describe('DaysoComponent', () => {
  let component: DaysoComponent;
  let fixture: ComponentFixture<DaysoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
