import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifInfoUsagerComponent } from './modif-info-usager.component';

describe('ModifInfoUsagerComponent', () => {
  let component: ModifInfoUsagerComponent;
  let fixture: ComponentFixture<ModifInfoUsagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifInfoUsagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifInfoUsagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
