import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputComponent } from '../input/input.component'

interface ITodoItem { item: string}

@Component({
  selector: 'todo-item',
  template: `
    <div class="todo-item">
    <input type="checkbox" class="todo-checkbox" (click)="completeItem()">
    <p class="todo-title" [ngClass]="{'todo-complete': isComplete}"> 
    {{ todoItem.item }}
    </p>
    <button class="btn btn-red" (click)="removeItem()">Remove</button>
    </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() todoItem: ITodoItem;

  @Output() remove:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    console.log("remove button clicked");
    this.remove.emit(this.todoItem);
  }

  isComplete: boolean = false;

  completeItem() {
    this.isComplete = !this.isComplete;
  }

}
