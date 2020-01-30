import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDashbordPage } from './task-dashbord.page';

describe('TaskDashbordPage', () => {
  let component: TaskDashbordPage;
  let fixture: ComponentFixture<TaskDashbordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDashbordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDashbordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
