import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackGroundDisplayComponent } from './back-ground-display.component';

describe('BackGroundDisplayComponent', () => {
  let component: BackGroundDisplayComponent;
  let fixture: ComponentFixture<BackGroundDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackGroundDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackGroundDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
