import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';

enum TaskStatus {
  Succes = 'Succes',
  Error= 'Error',
  Warning = 'Warning',
  None = 'None'
}
export interface Task {
  task: string;
  status: TaskStatus;
}

@Component({
  selector: 'todo',
  templateUrl: 'todo.component.html',
  styleUrl: './todo.component.scss',
  standalone: true,
  imports: [FormsModule, ListComponent],
})
export class TodoComponent implements OnInit {
  TaskStatus = TaskStatus;

  selectedStatus : TaskStatus = TaskStatus.None;

  todoArr: Task[] = [];
  todoText: string = '';
  intervalId: any;

  constructor() {}
  ngOnInit() {}

  add() {
    if (this.todoText.trim() && this.selectedStatus !== TaskStatus.None) {
        this.todoArr.push({task: this.todoText, status: this.selectedStatus} );
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
