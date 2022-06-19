import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTransactionComponent } from './home-transaction.component';

describe('HomeTransactionComponent', () => {
  let component: HomeTransactionComponent;
  let fixture: ComponentFixture<HomeTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
