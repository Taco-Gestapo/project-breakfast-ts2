/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EastereggComponent } from './easteregg.component';

describe('EastereggComponent', () => {
  let component: EastereggComponent;
  let fixture: ComponentFixture<EastereggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EastereggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EastereggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
