import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPropositionsPage } from './client-propositions.page';

describe('ClientPropositionsPage', () => {
  let component: ClientPropositionsPage;
  let fixture: ComponentFixture<ClientPropositionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPropositionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPropositionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
