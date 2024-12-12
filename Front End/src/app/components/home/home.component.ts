import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, TaskComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks=[
    {
      id: 1,
      name: "Log in",
      description: "Sign up or log in to get started.",
    },
  ]
}
