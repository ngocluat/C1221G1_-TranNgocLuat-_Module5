import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatermentComponent } from './staterment.component';

describe('StatermentComponent', () => {
  let component: StatermentComponent;
  let fixture: ComponentFixture<StatermentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatermentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatermentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
