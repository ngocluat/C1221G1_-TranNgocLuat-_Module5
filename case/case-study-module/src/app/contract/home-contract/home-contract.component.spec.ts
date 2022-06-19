import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContractComponent } from './home-contract.component';

describe('HomeContractComponent', () => {
  let component: HomeContractComponent;
  let fixture: ComponentFixture<HomeContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
