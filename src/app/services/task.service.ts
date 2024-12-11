import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}

  // Get Tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}`);
  }
  // Get Task
  getTask(id: string): Observable<Task>{
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }
  // Update Task
  updateTask(task: Task): Observable<Task> {
    console.log('Sending update request from task: ', task);
    return this.http.put<Task>(`${this.apiUrl}`,{
      body: {
        id: task._id,
        name: task.name,
        description: task.description,
      },
    })
  }
  deleteTask(id: string): Observable<any>{
    return this.http.request('delete', `${this.apiUrl}`, {body:{ id: id}});
  }


}
