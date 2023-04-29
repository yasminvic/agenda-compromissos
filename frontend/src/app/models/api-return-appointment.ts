import { Appointment } from "./appointment";

export class ApiReturnAppointment {
  details?: Appointment[];
  result?: string;

  constructor(obj: Partial<ApiReturnAppointment>){
    Object.assign(this, obj);
  }
}
