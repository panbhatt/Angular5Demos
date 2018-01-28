import { Action } from '@ngrx/store' ;

import ActionTypes from './../types/ActionTypes' ;

export default class partyIsConfirmedToggleAction implements Action {

         type = ActionTypes.PARTY_ISCONFIRMED_CHANGE ;
         constructor(public payload : Object) {
             
         }
}