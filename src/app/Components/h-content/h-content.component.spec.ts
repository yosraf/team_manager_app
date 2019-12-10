import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HContentComponent } from './h-content.component';

describe('HContentComponent', () => {
  let component: HContentComponent;
  let fixture: ComponentFixture<HContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HContentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
