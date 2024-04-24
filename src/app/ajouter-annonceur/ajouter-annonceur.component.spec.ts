import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAnnonceurComponent } from './ajouter-annonceur.component';

describe('AjouterAnnonceurComponent', () => {
  let component: AjouterAnnonceurComponent;
  let fixture: ComponentFixture<AjouterAnnonceurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAnnonceurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterAnnonceurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
