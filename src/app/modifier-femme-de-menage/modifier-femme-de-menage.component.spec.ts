import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFemmeDeMenageComponent } from './modifier-femme-de-menage.component';

describe('ModifierFemmeDeMenageComponent', () => {
  let component: ModifierFemmeDeMenageComponent;
  let fixture: ComponentFixture<ModifierFemmeDeMenageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierFemmeDeMenageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierFemmeDeMenageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
