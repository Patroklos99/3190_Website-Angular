import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifPassUsagerComponent } from './modif-pass-usager.component';

describe('ModifPassUsagerComponent', () => {
  let component: ModifPassUsagerComponent;
  let fixture: ComponentFixture<ModifPassUsagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifPassUsagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifPassUsagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
