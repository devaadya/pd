import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsbodyComponent } from './ssbody.component';

describe('SsbodyComponent', () => {
  let component: SsbodyComponent;
  let fixture: ComponentFixture<SsbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
