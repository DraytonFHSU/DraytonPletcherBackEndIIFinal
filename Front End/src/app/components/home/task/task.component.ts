import { Component } from '@angular/core';
import { Task } from '../../../models/task/task.model';
import { TaskService } from '../../../services/task.service';
import { EventManagerPlugin } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasks: Task[] = [{
    _id: '1',
    name: "Log in",
    description: "Sign up or log in to get started.",
    }
  ];
  task: any = {
    _id: '',
    name: '',
    description: '',
  };

  constructor(private taskService: TaskService)  {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data: any) => {
      this.tasks = data as Task[];
    })
  }

  // Updated Data
  loadTasks(){
    this.taskService.getTasks().subscribe((data:any) => {
      this.tasks = data;
    })
  }

  //createTask
  // createTask(id: string, name: string, description: string){
  //   if(id && name && description) {
  //     this.taskService.createTask(id, name, description).subscribe((taskData) =>{
  //       this.task= taskData;
  //       console.log(taskData);
  //     });
  //   } else {
  //     console.log('Please fill in all fields');
  //   }

  // }

  // Get Task
  getTask(id: string) {
    if(id) {
      this.taskService.getTask(id).subscribe((taskData) =>{
        this.task = taskData;
        console.log(taskData);
    });
    } else {
      console.log('Task Id is undefined');
    }
  }

  // Update Task
  updateTask(){
    if(this.task._id && this.task) {
      this.taskService.updateTask(this.task).subscribe({
        next: (updateTask) =>{
          console.log('Task successful update: ', updateTask);
          this.loadTasks()
        },
        error: (error)=>{
          console.error('error updating task: ', error)
        },
      })
    } else {
      console.log('Task Id is undefined')
    }
  }

  //Delete task
  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe((response) => {
      console.log('Employee deleted: ', response);
      this.loadTasks();
    })
  }
}
