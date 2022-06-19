import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraeteComponent } from './craete.component';

describe('CraeteComponent', () => {
  let component: CraeteComponent;
  let fixture: ComponentFixture<CraeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
