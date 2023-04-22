import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormAppointmentComponent } from './modal-form-appointment.component';

describe('ModalFormAppointmentComponent', () => {
  let component: ModalFormAppointmentComponent;
  let fixture: ComponentFixture<ModalFormAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFormAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFormAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
