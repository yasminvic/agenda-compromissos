import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { HomeComponent } from './pages/home/home.component';
import { ModalFormAppointmentComponent } from './components/modal/modal-form-appointment/modal-form-appointment.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        AppointmentComponent,
        HomeComponent,
        ModalFormAppointmentComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ]
})
export class AppModule { }
