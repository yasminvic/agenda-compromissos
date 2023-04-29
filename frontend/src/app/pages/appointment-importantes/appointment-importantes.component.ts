import { AppointmentService } from 'src/app/services/appointment.service';
import { Component, OnInit } from '@angular/core';
import { ApiReturnAppointment } from 'src/app/models/api-return-appointment';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-appointment-importantes',
  templateUrl: './appointment-importantes.component.html',
  styleUrls: ['./appointment-importantes.component.scss']
})
export class AppointmentImportantesComponent implements OnInit{

  public appointmentListGet$ = new Observable<ApiReturnAppointment>()
  public appointmentList: Appointment[] | undefined = []

  constructor(public service : AppointmentService ){}

  ngOnInit():void{
    this.appointmentListGet$ = this.service.getByPriority(2);

    this.appointmentListGet$.subscribe(
      (resp) =>{
        this.appointmentList = resp.details;
      }
    )
  }

}
