/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlooderComponent } from './flooder.component';

describe('FlooderComponent', () => {
  let component: FlooderComponent;
  let fixture: ComponentFixture<FlooderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlooderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlooderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
