import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelistComponent } from './freelist.component';

describe('FreelistComponent', () => {
  let component: FreelistComponent;
  let fixture: ComponentFixture<FreelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
