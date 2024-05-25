import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationfemmeplanningComponent } from './reservationfemmeplanning.component';

describe('ReservationfemmeplanningComponent', () => {
  let component: ReservationfemmeplanningComponent;
  let fixture: ComponentFixture<ReservationfemmeplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationfemmeplanningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationfemmeplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
