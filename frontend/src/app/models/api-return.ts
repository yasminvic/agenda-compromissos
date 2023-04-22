import { Appointment } from "./appointment";

export class ApiReturn {
  details?: Appointment[];
  result?: string;

  constructor(obj: Partial<ApiReturn>){
    Object.assign(this, obj);
  }
}
