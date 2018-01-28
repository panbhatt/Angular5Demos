import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import {PartyState} from './../app.state' ;

@Component({
  selector: 'app-party-info',
  templateUrl: './party-info.component.html',
  styleUrls: ['./party-info.component.css']
})
export class PartyInfoComponent implements OnInit {

  noOfConfirmed$:Observable<number>; 
  noOfOnTime$:Observable<number>; 


  constructor(private store :Store<PartyState>) {
    this.noOfConfirmed$ = store.select(appState => appState['party'].noOfConfirmed) ;
    this.noOfOnTime$ = store.select(appState => appState['party'].noOfOnTime) ;
  }

  ngOnInit() {
  }

}
