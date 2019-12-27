import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPropositionPage } from './project-proposition.page';

describe('ProjectPropositionPage', () => {
  let component: ProjectPropositionPage;
  let fixture: ComponentFixture<ProjectPropositionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPropositionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPropositionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
