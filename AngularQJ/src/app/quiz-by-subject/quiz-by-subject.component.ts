import { Component } from '@angular/core';
import {ConfigDataService} from '../shared/config-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz-config',
  standalone: false,
  templateUrl: './quiz-by-subject.component.html',
  styleUrl: './quiz-by-subject.component.css'
})
export class QuizBySubjectComponent {


  constructor(private configDataService: ConfigDataService, private router: Router)
  {

  }

  goToQuizTab(quizType: string): void {
    if(quizType === 'geography')
    {
      this.configDataService.updateSubjectUrl(this.configDataService.geoUrl);
      this.configDataService.updateSubject(this.configDataService.geoSubName);
      this.router.navigate(['/quiz']);
    }
    if(quizType === 'history')
    {
      this.configDataService.updateSubjectUrl(this.configDataService.histUrl);
      this.configDataService.updateSubject(this.configDataService.histSubName);
      this.router.navigate(['/quiz']);
    }
    if(quizType === 'chemistry')
    {
      this.configDataService.updateSubjectUrl(this.configDataService.chemUrl);
      this.configDataService.updateSubject(this.configDataService.chemSubName);
      this.router.navigate(['/quiz']);
    }
    if(quizType === 'biology')
    {
      this.configDataService.updateSubjectUrl(this.configDataService.bioUrl);
      this.configDataService.updateSubject(this.configDataService.bioSubName);
      this.router.navigate(['/quiz']);
    }
    if(quizType === 'general')
    {
      this.configDataService.updateSubjectUrl(this.configDataService.genUrl);
      this.configDataService.updateSubject(this.configDataService.genSubName);
      this.router.navigate(['/quiz']);
    }
  }
}
