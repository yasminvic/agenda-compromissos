import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiReturnAppointment } from 'src/app/models/api-return-appointment';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit{

  public appointmentGetList$ = new Observable<ApiReturnAppointment>();
  public appointmentList: Appointment[] | undefined = []

  constructor(public service:AppointmentService){}

  ngOnInit(): void {
    this.appointmentGetList$ = this.service.getAll();

    this.appointmentGetList$.subscribe(
      (resp) =>{
        this.appointmentList = resp.details;
        //console.log(resp.details)
      }
    )
  }

}
