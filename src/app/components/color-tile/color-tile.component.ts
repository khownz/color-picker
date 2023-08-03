import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Color} from '../../types/color';

@Component({
  selector: 'app-color-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-tile.component.html',
  styleUrls: ['./color-tile.component.scss'],
})
export class ColorTileComponent {
  @Input() color!: Color;
}
