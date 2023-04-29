import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentRegularesComponent } from './appointment-regulares.component';

describe('AppointmentRegularesComponent', () => {
  let component: AppointmentRegularesComponent;
  let fixture: ComponentFixture<AppointmentRegularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentRegularesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentRegularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
