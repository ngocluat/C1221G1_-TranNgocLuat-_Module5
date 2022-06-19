import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnetComponent } from './connet.component';

describe('ConnetComponent', () => {
  let component: ConnetComponent;
  let fixture: ComponentFixture<ConnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
