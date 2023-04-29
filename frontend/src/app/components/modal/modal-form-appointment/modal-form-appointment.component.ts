import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Observable } from 'rxjs';
import { Priority } from 'src/app/models/priority';
import { PriorityService } from 'src/app/services/priority.service';
import { ApiReturnPriority } from 'src/app/models/api-return-priority';

@Component({
  selector: 'app-modal-form-appointment',
  templateUrl: './modal-form-appointment.component.html',
  styleUrls: ['./modal-form-appointment.component.scss']
  //standalone: true,
  //imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe],
})
export class ModalFormAppointmentComponent implements OnInit{
  formulario: any;

  //lista que vai acessar o get do Priority
  public PriorityGetList$ = new Observable<ApiReturnPriority>();
  //lista que vau ter dados do Priority
  public priorityList: Priority[] | undefined = [];

  constructor(public activeModal: NgbActiveModal,
              public serviceAppointment: AppointmentService,
              public servicePriority: PriorityService){}//variavel que serve pra fechar o modal


  ngOnInit():void{
    //criando formulario
    this.formulario = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null),
      priority_id: new FormControl(null)
    });

    //chamando dados para criar combombox
    this.PriorityGetList$ = this.servicePriority.getPriority();
    this.PriorityGetList$.subscribe(
      (resp)=>{
        this.priorityList = resp.details;
      }
    );
  }

  //realizando o post do formulario
  createAppointment():void{
    console.log(this.formulario.value);
    const appointment: Appointment = this.formulario.value;
    console.log(appointment.priority_id);

    this.serviceAppointment.create(appointment).subscribe(
      (resp)=>{
      }
    )
  };
}
