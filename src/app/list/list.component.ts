import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'list',
    templateUrl: 'list.component.html',
    styleUrl: './list.component.scss',
    standalone: true,
    imports: [FormsModule]
})

export class ListComponent implements OnInit {
    todoArr: string[] = [];
    todoText: string = '';
    intervalId : any;

    constructor() { }
    ngOnInit() { }

    addItem (todoText: string) {
        console.log(todoText);
        this.todoArr.push(todoText);
    }

    start() {
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

        clearInterval(this.intervalId);
        this.intervalId = null;

    }
}