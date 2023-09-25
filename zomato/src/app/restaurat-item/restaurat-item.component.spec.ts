import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauratItemComponent } from './restaurat-item.component';

describe('RestauratItemComponent', () => {
  let component: RestauratItemComponent;
  let fixture: ComponentFixture<RestauratItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestauratItemComponent]
    });
    fixture = TestBed.createComponent(RestauratItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
