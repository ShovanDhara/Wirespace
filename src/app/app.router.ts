import { Routes } from '@angular/router';

import { SmartSpaceComponent } from './smart-space/smart-space.component';
import { SeatUberficationComponent } from './seat-uberfication/seat-uberfication.component';
import { VacanciesComponent } from './vacancies/vacancies.component';

export const appRoutes: Routes = [
  { path: 'smart-space', component: SmartSpaceComponent },
  { path: 'seat-uberfication', component: SeatUberficationComponent },
  { path: 'vacancies', component: VacanciesComponent },
  { path: '', redirectTo: '/smart-space', pathMatch: 'full' },
  { path: '**', component: SmartSpaceComponent }
];
