import { Appointment } from 'src/app/models/appointment';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiReturnAppointment } from 'src/app/models/api-return-appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-urgentes',
  templateUrl: './appointment-urgentes.component.html',
  styleUrls: ['./appointment-urgentes.component.scss']
})
export class AppointmentUrgentesComponent implements OnInit{

  public appointmentListGet$ = new Observable<ApiReturnAppointment>();
  public appointmentList: Appointment[] | undefined = []

  constructor(public service: AppointmentService){}

  ngOnInit(): void {
    this.appointmentListGet$ = this.service.getByPriority(1);

    this.appointmentListGet$.subscribe(
      (resp)=>{
        this.appointmentList = resp.details;
      }
    )
  }
}
