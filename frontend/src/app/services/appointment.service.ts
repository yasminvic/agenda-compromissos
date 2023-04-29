import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ApiReturn } from '../models/api-return';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(public http:HttpClient) { }
  url = "Appointment";

  public getAll(){
    return this.http.get<ApiReturn>(`${environment.apiUrlGet}/${this.url}`);
  }

  public create(appointment: Appointment): Observable<Appointment>{
      console.log('oi');
    return this.http.post<Appointment>(`${environment.apiUrlPost}/${this.url}`, appointment);

  }
}
