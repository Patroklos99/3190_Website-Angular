import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifInfoEcoleComponent } from './modif-info-ecole.component';

describe('ModifInfoEcoleComponent', () => {
  let component: ModifInfoEcoleComponent;
  let fixture: ComponentFixture<ModifInfoEcoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifInfoEcoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifInfoEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
