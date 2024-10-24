import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Pentru ngIf
import { Task } from '../todo.component';

@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrl: './list.component.scss',
  standalone: true,
  imports: [FormsModule],
})
export class ListComponent {
  @Input() arr: Task[] = [];
  @Output() closeItem = new EventEmitter<number>();

  constructor() {}

  close(index: number) {
    // Remove the item from the array
    this.closeItem.emit(index);
  }
}

// Java/Nodejs
