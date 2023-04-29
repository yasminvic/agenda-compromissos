import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { HomeComponent } from './pages/home/home.component';
import { ModalFormAppointmentComponent } from './components/modal/modal-form-appointment/modal-form-appointment.component';
import { AppointmentUrgentesComponent } from './pages/appointment-urgentes/appointment-urgentes.component';
import { AppointmentImportantesComponent } from './pages/appointment-importantes/appointment-importantes.component';
import { AppointmentRegularesComponent } from './pages/appointment-regulares/appointment-regulares.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        AppointmentComponent,
        HomeComponent,
        ModalFormAppointmentComponent,
        AppointmentUrgentesComponent,
        AppointmentImportantesComponent,
        AppointmentRegularesComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
    ]
})
export class AppModule { }
