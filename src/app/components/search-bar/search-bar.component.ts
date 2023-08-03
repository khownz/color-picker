import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {debounceTime, distinctUntilChanged, Subject} from 'rxjs';

const debounceDelay = 200;

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output()
  searchTermUpdated = new EventEmitter<string>();

  private searchTerm$ = new Subject<string>();

  search(event: InputEvent): void {
    const searchString = (event.target as HTMLInputElement).value;
    this.searchTerm$.next(searchString);
  }

  ngOnInit(): void {
    this.searchTerm$
      .pipe(debounceTime(debounceDelay), distinctUntilChanged())
      .subscribe((searchString) => {
        this.searchTermUpdated.emit(searchString);
      });
  }
}
