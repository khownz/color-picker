import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Color} from '../../types/color';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-color-tile',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatIconModule, MatTooltipModule],
  templateUrl: './color-tile.component.html',
  styleUrls: ['./color-tile.component.scss'],
})
export class ColorTileComponent {
  @Input() color!: Color;
}
