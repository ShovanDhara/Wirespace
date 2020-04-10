import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatDialogModule,
  MatTabsModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule
} from '@angular/material';

//Components
import { AppComponent } from './app.component';
import { SmartSpaceComponent } from './smart-space/smart-space.component';
import { ScannerComponent } from './smart-space/scanner/scanner.component';
import { SeatUberficationComponent } from './seat-uberfication/seat-uberfication.component';
import { AvailSpaceComponent } from './seat-uberfication/avail/avail.component';
import { ManageSpaceComponent } from './seat-uberfication/manage/manage.component';
import { AvailMapViewComponent } from './seat-uberfication/avail/avail-map-view/avail-map-view.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ViewOnMapComponent } from './shared/view-on-map/view-on-map.component';
import { ConfirmDialogComponent } from './shared/dialog/dialog.component';
//Routes
import { appRoutes } from './app.router';
//Services
import { SmartSpaceService } from './services/smart-space.service';
import { SeatUberficationService } from './services/seat-uberfication.service';
import { VacanciesService } from './services/vacancies.service';
import { CommonService } from './services/common.service';
import { CommonDialogService } from './services/common-dialog.service';
import { GlobalService } from './services/global.service';

@NgModule({
  declarations: [
    AppComponent,
    SmartSpaceComponent,
    ScannerComponent,
    SeatUberficationComponent,
    VacanciesComponent,
    HeaderComponent,
    NavComponent,
    ViewOnMapComponent,
    AvailSpaceComponent,
    AvailMapViewComponent,
    ManageSpaceComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MyDateRangePickerModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatStepperModule,
    ZXingScannerModule
  ],
  providers: [
    SmartSpaceService,
    SeatUberficationService,
    VacanciesService,
    CommonService,
    CommonDialogService,
    GlobalService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ViewOnMapComponent,
    AvailMapViewComponent,
    ConfirmDialogComponent,
    ScannerComponent
  ]
})
export class AppModule { }
