import { Injectable } from '@angular/core';


const storageName = 'aah_todo_list';

const defaultList = [
  { title: 'Python' },
  { title: 'Docker' },
  { title: 'AWS' },
  { title: 'Ruby' },
  { title: 'Java' },
  { title: 'Angular' },
];


@Injectable()
export class TodoListStorageService {

  private todoList;

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;
  }

  get() {
    return [...this.todoList];
  }

  post(item) {
    debugger;
    this.todoList.push(item);
    return this.update();
  }

  put(item, changes) {
    Object.assign(this.todoList[this.findItemIndex(item)], changes);
    return this.update();
  }

  destroy(item) {
    this.todoList.splice(this.findItemIndex(item), 1);
    return this.update();
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));
    return this.get();
  }

  private findItemIndex(item) {
    return this.todoList.indexOf(item);
  }

}
