import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-modal-form-appointment',
  templateUrl: './modal-form-appointment.component.html',
  styleUrls: ['./modal-form-appointment.component.scss']
  //standalone: true,
  //imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe],
})
export class ModalFormAppointmentComponent implements OnInit{
  formulario: any;

  constructor(public activeModal: NgbActiveModal,
              public service: AppointmentService,){}//variavel que serve pra fechar o modal


  ngOnInit():void{
    this.formulario = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null),
      priority: new FormControl(null)
    });

    $("#inputPriority").on("click", function(){
      console.log("oi combobox");
    });

  }

  createAppointment():void{

    console.log(this.formulario.value);
    const appointment: Appointment = this.formulario.value;

    this.service.create(appointment).subscribe(
      (resp)=>{

      }
    )

  };

  createComboBox(combo_id: number, name_class: string):void{
    
  }
}
