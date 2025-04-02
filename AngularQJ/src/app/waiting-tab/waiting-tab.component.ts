import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiting-tab',
  standalone: false,
  templateUrl: './waiting-tab.component.html',
  styleUrl: './waiting-tab.component.css',
  animations: [
    trigger('countdown', [
      state('ready', style({opacity: 1})),
      state('3', style({opacity: 1, transform: 'scale(1.2)'})),
      state('2', style({opacity: 1, transform: 'scale(1.1)'})),
      state('1', style({opacity: 1, transform: 'scale(1)'})),
      state('go', style({opacity: 0})),
      transition('* => *', animate('500ms ease-in-out'))
    ])
  ]
})

export class WaitingTabComponent implements OnInit {

  constructor(private router: Router) { }

  countdownState = 'ready';
  countdownText = 'Get ready';
  showNextComponent = false;

  ngOnInit() {
    this.startCountdown();
  }

  routeToQuizTab() {
    this.router.navigate(['/quiz-tab']);
  }

  startCountdown() {
    setTimeout(() => {
      this.countdownState = '3';
      this.countdownText = '3';

      setTimeout(() => {
        this.countdownState = '2';
        this.countdownText = '2';

        setTimeout(() => {
          this.countdownState = '1';
          this.countdownText = '1';

          setTimeout(() => {
            this.countdownState = 'go';
            this.countdownText = 'GO!';

            setTimeout(() => {
              this.showNextComponent = true;
              this.routeToQuizTab();
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }
}
