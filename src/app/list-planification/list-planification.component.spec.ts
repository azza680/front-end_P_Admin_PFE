import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanificationComponent } from './list-planification.component';

describe('ListPlanificationComponent', () => {
  let component: ListPlanificationComponent;
  let fixture: ComponentFixture<ListPlanificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlanificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlanificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
