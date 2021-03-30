import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedListComponent } from './searched-list.component';

describe('SearchedListComponent', () => {
  let component: SearchedListComponent;
  let fixture: ComponentFixture<SearchedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
