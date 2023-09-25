import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraBooardComponent } from './jira-booard.component';

describe('JiraBooardComponent', () => {
  let component: JiraBooardComponent;
  let fixture: ComponentFixture<JiraBooardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JiraBooardComponent]
    });
    fixture = TestBed.createComponent(JiraBooardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
