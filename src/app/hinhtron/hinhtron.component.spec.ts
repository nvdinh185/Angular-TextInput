import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HinhtronComponent } from './hinhtron.component';

describe('HinhtronComponent', () => {
  let component: HinhtronComponent;
  let fixture: ComponentFixture<HinhtronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HinhtronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HinhtronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
