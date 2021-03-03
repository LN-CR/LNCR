import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreefindComponent } from './freefind.component';

describe('FreefindComponent', () => {
  let component: FreefindComponent;
  let fixture: ComponentFixture<FreefindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreefindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreefindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
