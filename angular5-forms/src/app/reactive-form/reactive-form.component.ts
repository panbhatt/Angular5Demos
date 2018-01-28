import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

import UserService from "./../services/user-service.service" ;

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm:FormGroup ; 
  userNameCtrl:AbstractControl;
  passWCtrl:AbstractControl;
  formContents:string = "";

  constructor(fb:FormBuilder,private userService : UserService ) {
    this.reactiveForm = fb.group({
      'userName': ['User Name', Validators.required],
      'passw' : ['Password', Validators.required]
    }) ;

    this.userNameCtrl = this.reactiveForm.controls["userName"] ;
    
    this.passWCtrl = this.reactiveForm.controls["passw"] ;

    // Observers.

    this.userNameCtrl.valueChanges.subscribe((userN :String)=> { console.log("NEW VALUE Generated : " + userN)});
    this.reactiveForm.valueChanges.subscribe((form :any)=> { console.log("NEW VALUE Generated : " + JSON.stringify(form))});

    // User Details are as follows: 
    this.formContents = JSON.stringify(userService.getFullData("ÄBC")); 
   }

  ngOnInit() {
  }

  onSubmit(value:string) {
    this.formContents = JSON.stringify(value) ;
  }

}
