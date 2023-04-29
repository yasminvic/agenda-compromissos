import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Priority } from '../models/priority';
import { environment } from 'src/environments/environment';
import { ApiReturnPriority } from '../models/api-return-priority';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  constructor(public http: HttpClient) { }
  url = "Priority";

  public getPriority() {
    return this.http.get<ApiReturnPriority>(`${environment.apiUrlGet}/${this.url}`);
  }
}
