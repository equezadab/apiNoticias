import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFormComponent } from './ver-form.component';

describe('VerFormComponent', () => {
  let component: VerFormComponent;
  let fixture: ComponentFixture<VerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
