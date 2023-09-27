import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColorTileComponent} from '../color-tile/color-tile.component';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Paint} from '../../types/paint';
import {map, startWith} from 'rxjs';
import {PAINTS} from '../../data/paints';
import {Color} from '../../types/color';

@Component({
  selector: 'app-color-overview',
  standalone: true,
  imports: [
    CommonModule,
    ColorTileComponent,
    MatAutocompleteModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    ReactiveFormsModule,
  ],
  templateUrl: './color-overview.component.html',
  styleUrls: ['./color-overview.component.scss'],
})
export class ColorOverviewComponent implements OnInit {
  @Input() initialPaintName = '';

  selectedPaint: Paint | undefined;

  // TODO: extract to separate component?
  paintAutocomplete = new FormControl('');
  filteredPaints$ = this.paintAutocomplete.valueChanges.pipe(
    startWith(''),
    map((value) => this._filterPaintsByName(value || '')),
  );

  colorSearchTerm = new FormControl('');
  filteredColors$ = this.colorSearchTerm.valueChanges.pipe(
    startWith(''),
    map((value) => this._filterColorsByNameOrHex(value || '')),
  );

  ngOnInit(): void {
    console.log(this.initialPaintName);
  }

  onPaintSelectionChange(event: MatAutocompleteSelectedEvent) {
    const paintName = event.option.value;
    this._selectPaintByName(paintName);
    this._resetFilteredColors();
  }

  private _filterPaintsByName(searchTerm: string): Paint[] {
    const filterValue = searchTerm.toLowerCase();
    return PAINTS.filter((option) => option.name.toLowerCase().includes(filterValue));
  }

  private _selectPaintByName(paintName: string): void {
    this.selectedPaint = PAINTS.find((paint) => paint.name === paintName);
  }

  private _filterColorsByNameOrHex(searchTerm: string): Color[] {
    if (this.selectedPaint) {
      // TODO: more lenient search mechanism (fuzzy search)?
      if (searchTerm) {
        return this.selectedPaint?.colorList.filter((color) => {
          const nameMatches = color.name.toLowerCase().includes(searchTerm.toLowerCase());
          const hexMatches = color.hex.toLowerCase().includes(searchTerm.toLowerCase());
          return nameMatches || hexMatches;
        });
      } else {
        return this.selectedPaint?.colorList;
      }
    } else {
      return [];
    }
  }

  private _resetFilteredColors(): void {
    this.colorSearchTerm.setValue('');
  }
}
