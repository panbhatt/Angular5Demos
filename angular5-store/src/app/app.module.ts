import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';


import {
  
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PartiesComponent } from './parties/parties.component';
import { PartyaddComponent } from './partyadd/partyadd.component';
import { PartylistComponent } from './partylist/partylist.component';

import PartyReducer from './reducers/PartyReducers' ;
import PartyIsConfirmedToggleReducer from './reducers/PartyIsConfirmedToggleReducer' ;

import { DefaultPartyState,DefaultPartyDataState } from './app.initial.state';
import { PartyInfoComponent } from './party-info/party-info.component';


@NgModule({
  exports: [
  
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class DemoMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,PartiesComponent, PartyaddComponent, PartylistComponent,PartyInfoComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,DemoMaterialModule,ReactiveFormsModule,FormsModule,
    StoreModule.forRoot({ party :  PartyReducer, partyData : PartyIsConfirmedToggleReducer} ),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
