import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFormPage } from './team-form.page';

describe('TeamFormPage', () => {
  let component: TeamFormPage;
  let fixture: ComponentFixture<TeamFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
