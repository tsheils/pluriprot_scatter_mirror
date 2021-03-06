import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {takeUntil} from 'rxjs/internal/operators';

@Component({
  selector: 'app-scatter-menu',
  templateUrl: './scatter-menu.component.html',
  styleUrls: ['./scatter-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScatterMenuComponent implements OnInit {
@Output() resetZoom: EventEmitter<any> = new EventEmitter<any>();
@Output() filterScatterChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  /**
   * selection model to track selected filters
   * SelectionModel<string>
   */
  filterSelection = new SelectionModel<string>(true, ['gray', 'blue', 'red', 'green']);

  constructor() { }

  ngOnInit() {
    this.filterSelection.changed
      .subscribe(change => {
        console.log(this.filterSelection);
        this.filterScatterChange.emit(this.filterSelection.selected);
      });
  }


  reset() {
    this.resetZoom.emit();
  }
}
