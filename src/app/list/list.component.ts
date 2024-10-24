import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrl: './list.component.scss',
  standalone: true,
  imports: [FormsModule],
})
export class ListComponent {
  @Input() arr: string[] = [];
  @Output() closeItem = new EventEmitter<number>();

  constructor() {}

  close(index: number) {
    // Remove the item from the array
    this.closeItem.emit(index);
  }
}

// Java/Nodejs
