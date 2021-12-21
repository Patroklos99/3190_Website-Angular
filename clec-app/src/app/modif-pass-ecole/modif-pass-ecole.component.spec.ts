import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifPassEcoleComponent } from './modif-pass-ecole.component';

describe('ModifPassEcoleComponent', () => {
  let component: ModifPassEcoleComponent;
  let fixture: ComponentFixture<ModifPassEcoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifPassEcoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifPassEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
