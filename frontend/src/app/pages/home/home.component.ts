import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormAppointmentComponent } from 'src/app/components/modal/modal-form-appointment/modal-form-appointment.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public modalService: NgbModal){} //variavel NgbModal

  abrirModal(): void{
    const modalRef = this.modalService.open(ModalFormAppointmentComponent);//variavel NgbModal abre modal passando o nome do componente
  }
}
