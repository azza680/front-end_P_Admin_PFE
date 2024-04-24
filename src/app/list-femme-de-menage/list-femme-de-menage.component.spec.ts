import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFemmeDeMenageComponent } from './list-femme-de-menage.component';

describe('ListFemmeDeMenageComponent', () => {
  let component: ListFemmeDeMenageComponent;
  let fixture: ComponentFixture<ListFemmeDeMenageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFemmeDeMenageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFemmeDeMenageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
