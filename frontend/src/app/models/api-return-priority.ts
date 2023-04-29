import { Priority } from "./priority";

export class ApiReturnPriority {
  result?:string;
  details?: Priority[];

  constructor(obj: Partial<ApiReturnPriority>){
    Object.assign(this, obj);
  }
}
