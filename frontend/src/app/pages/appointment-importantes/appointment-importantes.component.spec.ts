import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentImportantesComponent } from './appointment-importantes.component';

describe('AppointmentImportantesComponent', () => {
  let component: AppointmentImportantesComponent;
  let fixture: ComponentFixture<AppointmentImportantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentImportantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentImportantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
