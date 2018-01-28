import { Action } from '@ngrx/store' ;
import ActionTypes from './../types/ActionTypes' ;

import { PartyState } from './../app.state' ;
import { DefaultPartyState } from './../app.initial.state' ;



export default function PartyIsConfirmedToggleReducer(state :Object = DefaultPartyState , action : Action) {

    switch(action.type) {
        case ActionTypes.PARTY_ISCONFIRMED_CHANGE_ANOTHER_REDUCER :
            console.log("Coming in PARYT IS CONFIRMED REDUCER " + JSON.stringify(state)) ;
            console.log("Action Payload = " + JSON.stringify(action['payload']) );
            let payload = action['payload']
            let parties = state['parties'].slice();
            parties.forEach((party) => {
                if(party.id == payload.id) 
                    party.isConfirmed = !party.isConfirmed ;
            });
            let noOfConfirmed:number = 0 ;
            parties.forEach(party => { party.isConfirmed ? noOfConfirmed++ : "" });

            let newState = Object.assign({}, state, {parties, noOfConfirmed } )  ;
            console.log("New state = " + JSON.stringify(newState));
            return newState ; 

        default :
            return state; 
    }
};