import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavDepartmentsComponent } from './sidenav-departments.component';

describe('SidenavDepartmentsComponent', () => {
  let component: SidenavDepartmentsComponent;
  let fixture: ComponentFixture<SidenavDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavDepartmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
