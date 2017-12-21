import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdUsersComponent } from './ed-users.component';

describe('EdUsersComponent', () => {
  let component: EdUsersComponent;
  let fixture: ComponentFixture<EdUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
