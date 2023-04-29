import { ApiReturnPriority } from "./api-return-priority";

export class Priority {
  id?: number;
  grau?: string;

  constructor(obj: Partial<ApiReturnPriority>){
    Object.assign(this, obj);
  }
}
