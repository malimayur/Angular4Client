import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnrollmentComponent } from './create-enrollment.component';

describe('CreateEnrollmentComponent', () => {
  let component: CreateEnrollmentComponent;
  let fixture: ComponentFixture<CreateEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
