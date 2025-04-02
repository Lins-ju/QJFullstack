import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTabResultsComponent } from './quiz-tab-results.component';

describe('QuizTabResultsComponent', () => {
  let component: QuizTabResultsComponent;
  let fixture: ComponentFixture<QuizTabResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizTabResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizTabResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
