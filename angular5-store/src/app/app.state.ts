import Party from './model/party';

export interface PartyState {
    parties: Party[] ; 
    count:number;
    noOfConfirmed : number;
    noOfOnTime : number;
}

