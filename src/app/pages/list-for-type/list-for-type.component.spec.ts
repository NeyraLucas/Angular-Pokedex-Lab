import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListForTypeComponent } from './list-for-type.component';

describe('ListForTypeComponent', () => {
  let component: ListForTypeComponent;
  let fixture: ComponentFixture<ListForTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListForTypeComponent]
    });
    fixture = TestBed.createComponent(ListForTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
