import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ApiReturnAppointment } from '../models/api-return-appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(public http:HttpClient) { }
  url = "Appointment";

  public getAll(){
    return this.http.get<ApiReturnAppointment>(`${environment.apiUrlGet}/${this.url}`);

  }

  public getByPriority(priority:number){
    return this.http.get<ApiReturnAppointment>(`${environment.apiUrlGetByPriority}/${priority}`);
  }

  public create(appointment: Appointment): Observable<Appointment>{
      console.log('oi');
    return this.http.post<Appointment>(`${environment.apiUrlPost}/${this.url}`, appointment);

  }
}
