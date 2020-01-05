import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyProjectPage } from './modify-project.page';

describe('ModifyProjectPage', () => {
  let component: ModifyProjectPage;
  let fixture: ComponentFixture<ModifyProjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyProjectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
