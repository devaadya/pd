import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoredataComponent } from './moredata.component';

describe('MoredataComponent', () => {
  let component: MoredataComponent;
  let fixture: ComponentFixture<MoredataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoredataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoredataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
