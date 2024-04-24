import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiferAdminComponent } from './modifer-admin.component';

describe('ModiferAdminComponent', () => {
  let component: ModiferAdminComponent;
  let fixture: ComponentFixture<ModiferAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiferAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModiferAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
