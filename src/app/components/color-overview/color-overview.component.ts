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
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarModule} from '@angular/material/snack-bar';

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
    MatIconModule,
    MatSnackBarModule,
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

  constructor(private readonly _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    if (this.initialPaintName) {
      this._selectPaintByName(this.initialPaintName);
      // TODO: see if this can be improved: currently only sets value of text field,
      //  but does not actually "select" the value within the autocomplete
      this.paintAutocomplete.setValue(this.initialPaintName);
    }
  }

  onPaintSelectionChange(event: MatAutocompleteSelectedEvent) {
    const paintName = event.option.value;
    this._selectPaintByName(paintName);
    this._resetFilteredColors();
  }

  onColorTileClicked(color: Color) {
    this._copyColorCodeToClipBoard(color);
    this._showCopyToClipboardSuccess(color);
  }

  private _filterPaintsByName(searchTerm: string): Paint[] {
    const filterValue = searchTerm.toLowerCase();
    return PAINTS.filter((option) => option.name.toLowerCase().includes(filterValue));
  }

  private _selectPaintByName(paintName: string): void {
    this.selectedPaint = PAINTS.find(
      (paint) => paint.name.toLowerCase() === paintName.toLowerCase(),
    );
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

  private _copyColorCodeToClipBoard(color: Color): void {
    navigator.clipboard.writeText(color.colorCode);
  }

  private _showCopyToClipboardSuccess(color: Color): void {
    const message = `Kleurcode gekopiëerd: ${color.colorCode}`;
    const config: MatSnackBarConfig = {duration: 3000, verticalPosition: 'top'};
    this._snackBar.open(message, undefined, config);
  }
}
