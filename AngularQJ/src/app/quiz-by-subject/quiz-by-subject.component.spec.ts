import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBySubjectComponent } from './quiz-by-subject.component';

describe('QuizConfigComponent', () => {
  let component: QuizBySubjectComponent;
  let fixture: ComponentFixture<QuizBySubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizBySubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizBySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
