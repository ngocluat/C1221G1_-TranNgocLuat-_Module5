import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFuramaComponent } from './home-furama.component';

describe('HomeFuramaComponent', () => {
  let component: HomeFuramaComponent;
  let fixture: ComponentFixture<HomeFuramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFuramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFuramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
