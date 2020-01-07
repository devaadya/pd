import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsheaderComponent } from './ssheader.component';

describe('SsheaderComponent', () => {
  let component: SsheaderComponent;
  let fixture: ComponentFixture<SsheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
