import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldPage } from './old.page';

describe('OldPage', () => {
  let component: OldPage;
  let fixture: ComponentFixture<OldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
