import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiReturnAppointment } from 'src/app/models/api-return-appointment';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-regulares',
  templateUrl: './appointment-regulares.component.html',
  styleUrls: ['./appointment-regulares.component.scss']
})
export class AppointmentRegularesComponent implements OnInit{

  public appointmentListGet$ = new Observable<ApiReturnAppointment>();
  public appointmentList: Appointment[] | undefined = [];

  constructor(public service: AppointmentService){}

  ngOnInit(): void {
    this.appointmentListGet$ = this.service.getByPriority(3);

    this.appointmentListGet$.subscribe(
    (resp)=>{
      this.appointmentList = resp.details;
    }
    )
  }

}
