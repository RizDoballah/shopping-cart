import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit { 

  registerForm: FormGroup
 
  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.builder.group({
      name: [" ", Validators.required],
      username: [" ", Validators.required],
      email: [" ", [Validators.required, Validators.email]],
      password: [" ", Validators.required],
      confirmpassword: " "
    })
  }
  register() {
    console.log(this.registerForm.value);
    
  }
 

}
