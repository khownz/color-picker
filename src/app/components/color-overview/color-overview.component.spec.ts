import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorOverviewComponent } from './color-overview.component';

describe('ColorOverviewComponent', () => {
  let component: ColorOverviewComponent;
  let fixture: ComponentFixture<ColorOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ColorOverviewComponent]
    });
    fixture = TestBed.createComponent(ColorOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
