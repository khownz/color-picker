import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ColorTileComponent} from './components/color-tile/color-tile.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {PAINTS} from './data/paints';
import {Paint} from './types/paint';
import {Color} from './types/color';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {map, startWith} from 'rxjs';

// TODO: double check if min chars before search is desired behaviour,
//  Probably not, as you need to select a paint first, and then see nothing until you start searching.
//  Feels weird.
const minCharsBeforeSearch = 2;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ColorTileComponent,
    SearchBarComponent,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'color-picker';
  filteredColors: Color[] | undefined;

  paints = PAINTS;
  selectedPaint: Paint | undefined;

  // TODO: extract to separate component?
  paintAutocomplete = new FormControl('');
  filteredPaints$ = this.paintAutocomplete.valueChanges.pipe(
    startWith(''),
    map((value) => this._filterPaintsByName(value || '')),
  );

  onPaintSelectionChange(event: MatAutocompleteSelectedEvent) {
    const paintName = event.option.value;
    this._selectPaintByName(paintName);

    // TODO: iso resetting, we probably just wat to search again with the same searchTerm,
    //  as we currently have no way to clear the searchTerm!
    this._resetFilteredColors();
  }

  filterColors(searchTerm: string): void {
    if (this.selectedPaint) {
      // TODO: more lenient search mechanism (fuzzy search)?
      if (searchTerm.length >= minCharsBeforeSearch) {
        this.filteredColors = this.selectedPaint?.colorList.filter((color) => {
          const nameMatches = color.name.toLowerCase().includes(searchTerm.toLowerCase());
          const hexMatches = color.hex.toLowerCase().includes(searchTerm.toLowerCase());
          return nameMatches || hexMatches;
        });
      } else {
        this.filteredColors = this.selectedPaint?.colorList;
      }
    }
  }

  private _filterPaintsByName(searchTerm: string): Paint[] {
    const filterValue = searchTerm.toLowerCase();
    return this.paints.filter((option) => option.name.toLowerCase().includes(filterValue));
  }

  private _selectPaintByName(paintName: string) {
    this.selectedPaint = PAINTS.find((paint) => paint.name === paintName);
  }

  private _resetFilteredColors(): void {
    this.filteredColors = [];
  }
}
