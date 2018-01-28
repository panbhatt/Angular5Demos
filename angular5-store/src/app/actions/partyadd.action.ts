import { Action } from '@ngrx/store' ;

import ActionTypes from './../types/ActionTypes' ;

export default class PartyAddAction implements Action {

         type = ActionTypes.PARTY_ADD ;
         constructor(public payload : Object) {
             
         }
}