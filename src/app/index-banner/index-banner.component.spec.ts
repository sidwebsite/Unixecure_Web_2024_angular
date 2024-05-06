import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBannerComponent } from './index-banner.component';

describe('IndexBannerComponent', () => {
  let component: IndexBannerComponent;
  let fixture: ComponentFixture<IndexBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexBannerComponent]
    });
    fixture = TestBed.createComponent(IndexBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
