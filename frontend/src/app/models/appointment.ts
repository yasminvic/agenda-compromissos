import {ApiReturnAppointment } from "./api-return-appointment";
import { Priority } from "./priority";

export class Appointment {
  title?:string;
  description?:string;
  startDate?:string;
  endDate?:string;
  priority_id?: number;
  priority?: Priority[];

  constructor(obj: Partial<ApiReturnAppointment>){
    Object.assign(this, obj);
  }
}
