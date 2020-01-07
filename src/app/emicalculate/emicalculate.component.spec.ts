import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmicalculateComponent } from './emicalculate.component';

describe('EmicalculateComponent', () => {
  let component: EmicalculateComponent;
  let fixture: ComponentFixture<EmicalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmicalculateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmicalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
