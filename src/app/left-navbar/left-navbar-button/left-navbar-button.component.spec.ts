import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavbarButtonComponent } from './left-navbar-button.component';

describe('LeftNavbarButtonComponent', () => {
  let component: LeftNavbarButtonComponent;
  let fixture: ComponentFixture<LeftNavbarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftNavbarButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftNavbarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
