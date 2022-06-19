import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServiceComponent } from './home-service.component';

describe('HomeServiceComponent', () => {
  let component: HomeServiceComponent;
  let fixture: ComponentFixture<HomeServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
