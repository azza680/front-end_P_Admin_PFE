import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnnonceurComponent } from './list-annonceur.component';

describe('ListAnnonceurComponent', () => {
  let component: ListAnnonceurComponent;
  let fixture: ComponentFixture<ListAnnonceurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAnnonceurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAnnonceurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
