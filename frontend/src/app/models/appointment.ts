import { ApiReturn } from "./api-return";
import { Priority } from "./priority";

export class Appointment {
  title?:string;
  description?:string;
  startDate?:string;
  endDate?:string;
  priority?: Priority[];

  constructor(obj: Partial<ApiReturn>){
    Object.assign(this, obj);
  }
}
