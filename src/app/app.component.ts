import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {COLORS} from './data/colors';
import {ColorTileComponent} from './components/color-tile/color-tile.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';

// TODO: double check if min chars before search is desired behaviour
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
  filteredColors = COLORS;

  filter(searchTerm: string): void {
    // TODO: more lenient search mechanism (fuzzy search)?
    if (searchTerm.length >= minCharsBeforeSearch) {
      this.filteredColors = COLORS.filter((color) => {
        const nameMatches = color.name.toLowerCase().includes(searchTerm.toLowerCase());
        const hexMatches = color.hex.toLowerCase().includes(searchTerm.toLowerCase());
        return nameMatches || hexMatches;
      });
    } else {
      this.filteredColors = COLORS;
    }
  }
}
