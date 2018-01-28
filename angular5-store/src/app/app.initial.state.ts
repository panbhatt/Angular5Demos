import  {PartyState } from './app.state' ;
import Party from './model/party';

export const DefaultPartyState: PartyState =  {
    parties :  Array<Party>(),
    count: 0 ,
    noOfConfirmed : 0 ,
    noOfOnTime : 0 
};

export const DefaultPartyDataState: Object =  {
    noOfConfirmed : 0
};