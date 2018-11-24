import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaythechuoiComponent } from './thaythechuoi.component';

describe('ThaythechuoiComponent', () => {
  let component: ThaythechuoiComponent;
  let fixture: ComponentFixture<ThaythechuoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThaythechuoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThaythechuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
