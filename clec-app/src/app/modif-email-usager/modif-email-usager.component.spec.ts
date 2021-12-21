import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifEmailUsagerComponent } from './modif-email-usager.component';

describe('ModifEmailUsagerComponent', () => {
  let component: ModifEmailUsagerComponent;
  let fixture: ComponentFixture<ModifEmailUsagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifEmailUsagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifEmailUsagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
