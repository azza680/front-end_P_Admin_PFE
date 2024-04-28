import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrificationComponent } from './vrification.component';

describe('VrificationComponent', () => {
  let component: VrificationComponent;
  let fixture: ComponentFixture<VrificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VrificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VrificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
