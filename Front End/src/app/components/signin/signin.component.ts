import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-signin',
  imports: [HeaderComponent, FooterComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  
  userLogin: any = new FormGroup({
    email: new FormControl(''),
    userPassword: new FormControl(''),
  })

  get form(){
    return this.userLogin.controls;
  }

  login(){
    console.log(this.userLogin.value)
  }
}
