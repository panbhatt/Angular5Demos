import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

import {PartyState} from './../app.state' ;
import ActionTypes from './../types/ActionTypes' ;
import Party from './../model/party' ;

var partyId = 1 ; 

@Component({
  selector: 'app-partyadd',
  templateUrl: './partyadd.component.html',
  styleUrls: ['./partyadd.component.css']
})
export class PartyaddComponent implements OnInit {

  reactiveForm:FormGroup ; 
  formContents:Object ; 
  partyNameCtrl:AbstractControl;
  partyNameEntered

   constructor(fb:FormBuilder, private store : Store<PartyState> ) {
    this.reactiveForm = fb.group({
      'partyName': ['Party Name', Validators.required]
    }) ;
    this.partyNameCtrl = this.reactiveForm.controls["partyName"] ;

    this.partyNameCtrl.valueChanges.subscribe((newPartyName :String)=> { console.log("NEW Party Generated : " + newPartyName)});
  }

  ngOnInit() {
  }

  onSubmit(value:string) {
    this.formContents = JSON.stringify(value) ;
    let party = new Party({ 
       userName : this.partyNameCtrl.value,
       isOnTime:true,
       isConfirmed:false,
       id : partyId++
    });
    this.store.dispatch({type : ActionTypes.PARTY_ADD, payload : party}) ;
    console.log("COMING IN SUBMIT. ") ;
  }


}
