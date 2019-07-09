import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInformationsAddEditComponent } from './client-informations-add-edit.component';

describe('ClientInformationsAddEditComponent', () => {
  let component: ClientInformationsAddEditComponent;
  let fixture: ComponentFixture<ClientInformationsAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInformationsAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInformationsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
