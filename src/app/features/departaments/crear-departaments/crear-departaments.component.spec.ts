import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDepartamentsComponent } from './crear-departaments.component';

describe('CrearDepartamentsComponent', () => {
  let component: CrearDepartamentsComponent;
  let fixture: ComponentFixture<CrearDepartamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearDepartamentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDepartamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
