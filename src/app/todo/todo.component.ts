import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'todo',
    templateUrl: 'todo.component.html',
    styleUrl: './todo.component.scss',
    standalone: true,
    imports: [FormsModule]
})

export class TodoComponent implements OnInit {
    todoTitle = 'THis is the todo title';
    todoArr: string[] = [];
    numbersArr = [1,2,3,4,5];
    todoText: string = '';
    intervalId : any;

    constructor() { }
    ngOnInit() { }

    add() {
        if (this.todoText.trim()) {
            this.todoArr.push(this.todoText);
            this.todoText = ''; // Clear the input after adding
        }
    }

    start() {
        this.stop();
        this.intervalId = setInterval(() => {
            console.log(this.todoArr)
                if(this.todoArr.length){
                    this.todoArr.pop();
                }
                else{
                    this.stop();
                }
            }, 3000);
       }
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
    }  
}

    
