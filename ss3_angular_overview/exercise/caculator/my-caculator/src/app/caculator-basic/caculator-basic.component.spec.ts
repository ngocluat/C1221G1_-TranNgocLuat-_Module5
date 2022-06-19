import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaculatorBasicComponent } from './caculator-basic.component';

describe('CaculatorBasicComponent', () => {
  let component: CaculatorBasicComponent;
  let fixture: ComponentFixture<CaculatorBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaculatorBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaculatorBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
