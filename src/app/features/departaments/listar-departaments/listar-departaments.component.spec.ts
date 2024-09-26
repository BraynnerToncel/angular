import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDepartamentsComponent } from './listar-departaments.component';

describe('ListarDepartamentsComponent', () => {
  let component: ListarDepartamentsComponent;
  let fixture: ComponentFixture<ListarDepartamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarDepartamentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarDepartamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
