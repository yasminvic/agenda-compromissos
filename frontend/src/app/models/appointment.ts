import { ApiReturn } from "./api-return";

export class Appointment {
  title?:string;
  description?:string;
  startDate?:string;
  endDate?:string;
  createdOn?: string;
  priority?:string;

  constructor(obj: Partial<ApiReturn>){
    Object.assign(this, obj);
  }
}
