import { Component, OnInit, Input } from '@angular/core'
import { TodoService } from 'src/app/services/todo.service'

import { Todo } from 'src/app/models/Todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }

    return classes
  }

  onToggle(todo: Todo) {
    todo.completed = !todo.completed

    this.todoService.toggleCompleted(todo).subscribe(res => console.log('[Component: todo-item]', res))

  }

  onDelete(todo: Todo) {
    console.log('Deleted!')
  }
}
