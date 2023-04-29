import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentImportantesComponent } from './pages/appointment-importantes/appointment-importantes.component';
import { AppointmentRegularesComponent } from './pages/appointment-regulares/appointment-regulares.component';
import { AppointmentUrgentesComponent } from './pages/appointment-urgentes/appointment-urgentes.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'appointementUrgentes', component: AppointmentUrgentesComponent},
  {path: 'appointmentImportantes', component: AppointmentImportantesComponent},
  {path: 'appointmentRegulares', component: AppointmentRegularesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
