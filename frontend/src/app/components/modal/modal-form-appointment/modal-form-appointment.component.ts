import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-form-appointment',
  templateUrl: './modal-form-appointment.component.html',
  styleUrls: ['./modal-form-appointment.component.scss']
})
export class ModalFormAppointmentComponent implements OnInit{

  constructor(public activeModal: NgbActiveModal){}//variavel que serve pra fechar o modal

  ngOnInit():void{

  }
}
