import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import Party from './../model/party' ;
import {PartyState} from './../app.state' ;
import ActionTypes from './../types/ActionTypes' ;

@Component({
  selector: 'app-partylist',
  templateUrl: './partylist.component.html',
  styleUrls: ['./partylist.component.css']
})
export class PartylistComponent implements OnInit {

    dataSource$:MatTableDataSource<Party>;
    displayedColumns = ['userName', 'isOnTime', 'isConfirmed'];
    partiesList$:MatTableDataSource<Party[]>; 
    partiesCount$:Observable<number>  ; 

  constructor(private store :Store<PartyState>) {
    store.subscribe((newState) => { console.log("NEW STATE IN LIST " + JSON.stringify(newState)) ;});
    store.select(appState => appState['party'].parties).subscribe((nPL:Party[]) => { this.partiesList$ = new MatTableDataSource<Party[]>(nPL)} );
    this.partiesCount$ = store.select(appState => appState['party'].count) ;
    
    /* ANOTHER WAY TO DO THE THINGS. 
    use this line in HTML for this // <mat-table #table [dataSource]="dataSource$">
    store.subscribe((newState) => { console.log("NEW STATE IN LIST " + JSON.stringify(newState)) ;});
    store.subscribe((newState) => {
      this.partiesCount$ = newState.party.parties ? newState.party.parties.length : 0;  
      this.dataSource$ = new MatTableDataSource<Party>(newState.party.parties) ;
    });*/
 
}

  ngOnInit() {
  }

  handleIsConfirmedToggle($event:Event, id:number) {
    
    this.store.dispatch({type : ActionTypes.PARTY_ISCONFIRMED_CHANGE, payload : {id}}) ;
    
    
  }

  handleIsOnTimeToggle($event:Event, id:number) {
    this.store.dispatch({type : ActionTypes.PARTY_ONTIME_CHANGE, payload : {id}}) ;
  }


}
  

