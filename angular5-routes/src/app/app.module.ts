import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';

import {
  MatAutocompleteModule, MatButtonModule,   MatButtonToggleModule,  MatCardModule,  MatCheckboxModule,  MatChipsModule,  MatDatepickerModule,
  MatDialogModule,  MatExpansionModule,  MatGridListModule,  MatIconModule,  MatInputModule,  MatListModule,  MatMenuModule,  MatNativeDateModule,
  MatPaginatorModule,  MatProgressBarModule,  MatProgressSpinnerModule,  MatRadioModule,  MatRippleModule,  MatSelectModule,  MatSidenavModule,
  MatSliderModule,  MatSlideToggleModule,  MatSnackBarModule,  MatSortModule,  MatTableModule,  MatTabsModule,  MatToolbarModule,
  MatTooltipModule,  MatStepperModule
} from '@angular/material';

import  routes  from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  exports: [
    CdkTableModule,
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
    AppComponent,HomeComponent , AboutComponent, ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) ,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
