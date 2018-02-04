import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ItemComponent} from "../item/item.component";


@Component({
  selector: 'todo-input',
  template: `
    <input class="todo-input" [value]="title" 
            (keyup.enter)="changeTitle($event.target.value)"
            #inputelement>
    <button class="btn" (click)="changeTitle($event.target.value)">
    Save
    </button>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  title: string = '';
  todoList = [];

  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
    console.log("changeTitle");
    this.submit.emit(newTitle);
  }

  addItem(title: string): void {
    console.log("addItem");
    this.todoList.push({ title });
  }


}
