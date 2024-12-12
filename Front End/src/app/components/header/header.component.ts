import { Component } from '@angular/core';
import { Router, RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navMenu=[
    { name: 'Home', url: '/'},
    { name: 'About', url: '/about'},
    { name: 'Contact', url: '/contact'},
  ]
}
