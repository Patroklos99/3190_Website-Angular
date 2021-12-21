import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifEmailEcoleComponent } from './modif-email-ecole.component';

describe('ModifEmailEcoleComponent', () => {
  let component: ModifEmailEcoleComponent;
  let fixture: ComponentFixture<ModifEmailEcoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifEmailEcoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifEmailEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
