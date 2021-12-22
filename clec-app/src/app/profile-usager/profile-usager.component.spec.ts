import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUsagerComponent } from './profile-usager.component';

describe('ProfileUsagerComponent', () => {
  let component: ProfileUsagerComponent;
  let fixture: ComponentFixture<ProfileUsagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUsagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUsagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
