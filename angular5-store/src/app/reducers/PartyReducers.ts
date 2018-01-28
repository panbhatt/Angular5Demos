import { Action } from '@ngrx/store';
import ActionTypes from './../types/ActionTypes';

import { PartyState } from './../app.state';
import { DefaultPartyState } from './../app.initial.state';



export default function PartyReducer(state: Object = DefaultPartyState, action: Action) {


    switch (action.type) {
        case ActionTypes.PARTY_ADD: {
            console.log("Coming in PARYT ADD REDUCER " + JSON.stringify(state));
            console.log("Action Payload = " + JSON.stringify(action['payload']));
            let parties = state['parties'].slice();
            parties.push(action['payload']);
            let noOfConfirmed: number = 0;
            parties.forEach(party => { party.isConfirmed ? noOfConfirmed++ : "" });
            let noOfOnTime: number = 0;
            parties.forEach(party => { party.isOnTime ? noOfOnTime++ : "" });
            let newState = Object.assign({}, state, { parties, count: parties.length,noOfConfirmed ,noOfOnTime });
            
            console.log("New state = " + JSON.stringify(newState));
            return newState;
        }

        case ActionTypes.PARTY_ISCONFIRMED_CHANGE: {
            console.log("Coming in PARYT IS CONFIRMED REDUCER " + JSON.stringify(state));
            console.log("Action Payload = " + JSON.stringify(action['payload']));
            let payload = action['payload']
            let parties = state['parties'].slice();
            parties.forEach((party) => {
                if (party.id == payload.id)
                    party.isConfirmed = !party.isConfirmed;
            });
            let noOfConfirmed: number = 0;
            parties.forEach(party => { party.isConfirmed ? noOfConfirmed++ : "" });
            console.log("NO of ISCONFIRMED = "+ noOfConfirmed) ;
            let newState = Object.assign({}, state, { parties, noOfConfirmed });
            console.log("New state = " + JSON.stringify(newState));
            return newState;
        }

        case ActionTypes.PARTY_ONTIME_CHANGE: {
            let payload = action['payload']
            let parties = state['parties'].slice();
            parties.forEach((party) => {
                if (party.id == payload.id)
                    party.isOnTime = !party.isOnTime;
            });
            let noOfOnTime: number = 0;
            parties.forEach(party => { party.isOnTime ? noOfOnTime++ : "" });
            console.log("NO of noOfOnTime = "+ noOfOnTime) ;
            let newState = Object.assign({}, state, { parties, noOfOnTime });
            console.log("New state = " + JSON.stringify(newState));
            return newState;
        }

        default:
            return state;
    }
};