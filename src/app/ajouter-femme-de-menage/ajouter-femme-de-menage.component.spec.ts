import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFemmeDeMenageComponent } from './ajouter-femme-de-menage.component';

describe('AjouterFemmeDeMenageComponent', () => {
  let component: AjouterFemmeDeMenageComponent;
  let fixture: ComponentFixture<AjouterFemmeDeMenageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFemmeDeMenageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterFemmeDeMenageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
