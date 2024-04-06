import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataListComponent } from './user-data-list.component';

describe('UserDataListComponent', () => {
  let component: UserDataListComponent;
  let fixture: ComponentFixture<UserDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
