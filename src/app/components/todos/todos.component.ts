import { Component, OnInit } from '@angular/core'
import { v4 as uuidv4 } from 'uuid'

import { TodoService } from 'src/app/services/todo.service'
import { Todo } from 'src/app/models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[]

  //Binding TodoService to private property todoService
  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res
    })
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id)

    this.todoService.deleteTodo(todo).subscribe()
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(res => {
      //Fix duplicating id by Placeholder server
      res.id = uuidv4()

      this.todos.push(res)
    })
  }
}
