import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ColorTileComponent} from './components/color-tile/color-tile.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {PAINTS} from './data/paints';
import {Paint} from './types/paint';
import {Color} from './types/color';

// TODO: double check if min chars before search is desired behaviour,
//  Probably not, as you need to select a paint first, and then see nothing until you start searching.
//  Feels weird.
const minCharsBeforeSearch = 2;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ColorTileComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'color-picker';
  filteredColors: Color[] | undefined;

  paints = PAINTS;
  selectedPaint: Paint | undefined;

  onPaintSelectionChange(event: Event) {
    const paintName = (event.target as HTMLSelectElement).value;
    this.selectPaintByName(paintName);
    // TODO: iso resetting, we probably just wat to search again with the same searchTerm,
    //  as we currently have no way to clear the searchTerm!
    this.resetFilteredColors();
  }

  filter(searchTerm: string): void {
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

  private selectPaintByName(paintName: string) {
    this.selectedPaint = PAINTS.find((paint) => paint.name === paintName);
  }

  private resetFilteredColors(): void {
    this.filteredColors = [];
  }
}
