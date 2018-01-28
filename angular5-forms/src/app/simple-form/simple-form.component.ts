import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  formContents:string = "";

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form : any) : void {
    this.formContents = JSON.stringify(form) ;
    console.log(form) ;
  }

}
