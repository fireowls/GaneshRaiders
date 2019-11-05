import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLoadedComponent } from './article-loaded.component';

describe('ArticleLoadedComponent', () => {
  let component: ArticleLoadedComponent;
  let fixture: ComponentFixture<ArticleLoadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleLoadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleLoadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
