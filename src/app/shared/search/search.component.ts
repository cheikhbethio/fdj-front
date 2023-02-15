import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  @Output() item = new EventEmitter<string>();

  public data: string = '';

  constructor() { 
  }
  
  public ok(): void {
    if (!this.data) {
      return;
    }
    this.item.emit(this.data)
  }
  public cancel(): void {
     this.data = '' 
  }
}
