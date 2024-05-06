import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCountingComponent } from './index-counting.component';

describe('IndexCountingComponent', () => {
  let component: IndexCountingComponent;
  let fixture: ComponentFixture<IndexCountingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexCountingComponent]
    });
    fixture = TestBed.createComponent(IndexCountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
