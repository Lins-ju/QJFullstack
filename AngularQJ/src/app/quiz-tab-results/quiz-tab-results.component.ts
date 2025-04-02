import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz-tab-results',
  standalone: false,
  templateUrl: './quiz-tab-results.component.html',
  styleUrl: './quiz-tab-results.component.css'
})
export class QuizTabResultsComponent {

  constructor(private router: ActivatedRoute) {
    this.router.queryParams.subscribe(params => {
      this.correctAnswersCount = params['correctAnswers'];
      this.quizSize = params['quizSize'];
    });
  }

  correctAnswersCount: any;
  quizSize: any;

  correctToQuizSizeRation(): number {
    return this.correctAnswersCount / this.quizSize;
  }
}
