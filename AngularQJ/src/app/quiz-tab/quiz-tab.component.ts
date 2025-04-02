import {Component, HostBinding} from '@angular/core';
import {QuizDataService} from '../services/quiz.data.service';
import {QuizData} from '../models/quiz.model';
import {ConfigDataService} from '../shared/config-data.service';
import {Router} from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-quiz-tab',
  standalone: false,
  templateUrl: './quiz-tab.component.html',
  styleUrl: './quiz-tab.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class QuizTabComponent {
  @HostBinding('@fadeIn')
  public fadeInState = 'void';

  constructor(private quizDataService: QuizDataService,
              private configDataService: ConfigDataService,
              private router: Router) {
    setTimeout(() => {
      this.startFadeIn();
    }, 500);

    this.quizSubject = this.configDataService.getCurrentSubject();
    console.log(this.configDataService.getCurrentUrl());

    this.quizDataService.getRandomSetOfQuests(this.configDataService.getCurrentUrl())
      .subscribe((quizData: QuizData[]) => {
        this.quizObjects = quizData;
        this.currentObject();
        this.quizSize = quizData.length;
      });

  }

  quizSubject: string = '';
  questionText: string = '';
  answers: string[] = [];
  selectedAnswer: string = '';
  correctAnswer: string = '';
  currentIndex: number = 0;
  answerStatus: string = '';
  quizObjects: any;
  isAnswerConfirmed: boolean = false;
  quizSize: number = 0;
  correctAnswersNumber: number = 0;

  startFadeIn() {
    this.fadeInState = '*';
  }

  resetAndFadeIn() {
    this.fadeInState = 'void';
    setTimeout(() => {
      this.fadeInState = '*';
    }, 0);
  }


  currentObject(): void {
    const object = this.quizObjects[this.currentIndex];
    this.answers = object.answers;
    this.questionText = object.questionText;
    this.correctAnswer = object.correctAnswer;
  }

  selectAnswer(selectedAnswerFromUser: string): void {
    this.selectedAnswer = selectedAnswerFromUser;
    console.log(selectedAnswerFromUser);
  }

  isAnswerSelected(answerText: string): boolean {
    return this.selectedAnswer === answerText;
  }

  isAnswerCorrect(): boolean {
    this.isAnswerConfirmed = true;
    const result = this.correctAnswer === this.selectedAnswer;

    if (result) {
      this.answerStatus = 'correct';
      this.correctAnswersNumber++
    }
    if (!result) {
      this.answerStatus = 'incorrect';
    }

    return this.correctAnswer === this.selectedAnswer;
  }

  nextObject(): void {
    this.startFadeIn();
    this.resetAndFadeIn();
    this.currentIndex++;
    this.isAnswerConfirmed = false;
    this.answerStatus = '';
    this.selectedAnswer = '';
    this.currentObject();

  }

  goToResults(): void {
    this.router.navigate(['/quiz-tab-results'],
      {queryParams: {correctAnswers: this.correctAnswersNumber, quizSize: this.quizSize}});
  }

  isQuizDone(): boolean {
    const fixedCurrentIndex = this.currentIndex + 1;
    return this.quizSize === fixedCurrentIndex;
  }
}
