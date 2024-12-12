import { Component, ɵIS_INCREMENTAL_HYDRATION_ENABLED } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [HeaderComponent, FooterComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    user = {
    email:'',
    password:'',
    confirmPassword:'',
  }

  reg(){
    console.log(this.user)
  }
}
