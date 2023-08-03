import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTileComponent } from './color-tile.component';

describe('ColorTileComponent', () => {
  let component: ColorTileComponent;
  let fixture: ComponentFixture<ColorTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ColorTileComponent]
    });
    fixture = TestBed.createComponent(ColorTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
