import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {QuizTabComponent} from './quiz-tab/quiz-tab.component';
import {WaitingTabComponent} from './waiting-tab/waiting-tab.component';
import {QuizBySubjectComponent} from './quiz-by-subject/quiz-by-subject.component';
import {QuizTabResultsComponent} from './quiz-tab-results/quiz-tab-results.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'quiz', component: QuizTabComponent },
  { path: 'timer', component: WaitingTabComponent },
  { path: 'quiz-by-subject', component: QuizBySubjectComponent },
  { path: 'quiz-tab-results', component: QuizTabResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
