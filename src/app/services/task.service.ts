import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}

  // // Get Tasks
  // getTasks(): Observable<Task[]> {
  //   return this.http.get<Task[]>(`${this.apiUrl}`);
  // }
  // // Get Task
  // getTask(id: string): Observable<Task>{
  //   return this.http.get<Task>(`${this.apiUrl}/${id}`);
  // }
  // // Update Task
  // updateTask(employee: Task): Observable<Task> {
  //   console.log('Sending update request from task: ', task);
  //   return this.http.put<Task>(`${this.apiUrl}`,{
  //     body: {
  //       id: task._id,
  //       name: task.name,
  //       description: task.description,
  //     },
  //   })
  // }


}
