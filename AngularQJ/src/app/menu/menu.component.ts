import {Component} from '@angular/core';
import {ConfigDataService} from '../shared/config-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private configDataService: ConfigDataService, private router: Router) {
    this.subjectArray = [this.configDataService.geoUrl,
      this.configDataService.histUrl, this.configDataService.chemUrl,
      this.configDataService.bioUrl, this.configDataService.genUrl]
  }

  subjectArray: string[] = [];

  randomQuizPicker(): void {
    const index = Math.floor(Math.random() * this.subjectArray.length);
    const subjectData = this.configDataService.quizRoutingData[index];

    console.log(index);
    this.configDataService.updateSubject(subjectData.subName);
    this.configDataService.updateSubjectUrl(subjectData.url);
    this.router.navigate(['/quiz']);
  }
}
