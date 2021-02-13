import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
      {
        id: 1,
        title: "Todo One",
        completed: true
      },
      {
        id: 2,
        title: "Todo 2",
        completed: false
      },
      {
        id: 3,
        title: "Todo 3",
        completed: false
      }
    ]
  }
}
