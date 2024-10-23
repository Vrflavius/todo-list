import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';

@Component({
    selector: 'todo',
    templateUrl: 'todo.component.html',
    styleUrl: './todo.component.scss',
    standalone: true,
    imports: [FormsModule, ListComponent]
})

export class TodoComponent implements OnInit {
    //todoTitle = 'THis is the todo title';
    todoArr: string[] = [];
    //numbersArr = [1,2,3,4,5];
    todoText: string = '';
    intervalId : any;
    @ViewChild('mylist') listComponent?: ListComponent; 


    constructor() { }
    ngOnInit() { }

    add() {
        if (this.todoText.trim()) {
            if(this.listComponent){
                this.listComponent.addItem(this.todoText)
                 this.todoText = ''; 
            }
            
        }
    }

    start() {
        this.stop();
        if(this.listComponent){
            this.listComponent.start();
        }
    }
    stop() {
        if(this.listComponent){
            this.listComponent.stop();
        }
    }  
}

    
