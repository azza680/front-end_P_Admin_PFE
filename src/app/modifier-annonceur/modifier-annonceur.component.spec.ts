import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAnnonceurComponent } from './modifier-annonceur.component';

describe('ModifierAnnonceurComponent', () => {
  let component: ModifierAnnonceurComponent;
  let fixture: ComponentFixture<ModifierAnnonceurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierAnnonceurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierAnnonceurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
