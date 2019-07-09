import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTrainerAddEditComponent } from './personal-trainer-add-edit.component';

describe('PersonalTrainerAddEditComponent', () => {
  let component: PersonalTrainerAddEditComponent;
  let fixture: ComponentFixture<PersonalTrainerAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalTrainerAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalTrainerAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
