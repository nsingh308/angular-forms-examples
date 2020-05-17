import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstFormPageComponent } from './first-form-page.component';

describe('FirstFormPageComponent', () => {
  let component: FirstFormPageComponent;
  let fixture: ComponentFixture<FirstFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
