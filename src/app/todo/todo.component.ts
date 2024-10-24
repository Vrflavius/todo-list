import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'todo',
  templateUrl: 'todo.component.html',
  styleUrl: './todo.component.scss',
  standalone: true,
  imports: [FormsModule, ListComponent],
})
export class TodoComponent implements OnInit {
  todoArr: string[] = [];
  todoText: string = '';
  intervalId: any;

  constructor() {}
  ngOnInit() {}

  add() {
    if (this.todoText.trim()) {
        this.todoArr.push(this.todoText);
        this.todoText = '';
    }
  }

  start() {
    this.intervalId = setInterval(() => {
      if (this.todoArr.length) {
        this.todoArr.pop();
      } else {
        this.stop();
      }
    }, 3000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  removeItem(index: number) {
    this.todoArr.splice(index, 1);
  }

}
