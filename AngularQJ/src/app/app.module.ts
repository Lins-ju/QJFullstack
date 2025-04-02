import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {QuizTabComponent} from './quiz-tab/quiz-tab.component';
import {NgOptimizedImage} from '@angular/common';
import {provideHttpClient} from '@angular/common/http';
import {WaitingTabComponent} from './waiting-tab/waiting-tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizTabResultsComponent } from './quiz-tab-results/quiz-tab-results.component';
import { QuizBySubjectComponent } from './quiz-by-subject/quiz-by-subject.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    QuizTabComponent,
    WaitingTabComponent,
    QuizTabResultsComponent,
    QuizBySubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
