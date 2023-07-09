import { Component } from '@angular/core';
import { FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface UserModel{
  email: FormControl<string|null>;
  password: FormControl<string|null>;
}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  //infoUser: FormGroup;

emailControl =  new FormControl('',[Validators.required]);
passwordControl = new FormControl('',[Validators.required]);


constructor(private fb: FormBuilder){
  this.emailControl.invalid
  this.passwordControl.invalid
}

    userModel: FormGroup<UserModel> = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });

  
}
