import { Component } from '@angular/core';
import * as $ from 'jquery';
import { ModalFormAppointmentComponent } from './components/modal/modal-form-appointment/modal-form-appointment.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'frontend';

  constructor(public modalService: NgbModal){} //variavel NgbModal

  abrirModal(): void{
    const modalRef = this.modalService.open(ModalFormAppointmentComponent);//variavel NgbModal abre modal passando o nome do componente
  }
}
