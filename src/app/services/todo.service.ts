import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Todo } from 'src/app/models/Todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos'
  todosLimit: string = '?_limit=5'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`)
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`

    return this.http.put(url, todo, this.httpOptions)
  }

  deleteTodo(todo: Todo) {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.delete(url)
  }

  addTodo(todo: Todo): Observable<Todo> {
    const res = this.http.post<Todo>(this.todosUrl, todo, this.httpOptions)

    return res
  }
}
