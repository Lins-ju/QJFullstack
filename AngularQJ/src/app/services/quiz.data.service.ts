import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizData } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {

  private apiUrl = 'http://localhost:8080';
  private geoUrl = 'geoquest';
  private chemUrl = 'chemquest';
  private bioUrl = 'bioquest';
  private genUrl = 'genquest';

  constructor(private http : HttpClient)
  {

  }

  getRandomSetOfQuests(quizTypeUrl: string): Observable<QuizData[]> {
    return this.http.get<QuizData[]>(`${this.apiUrl}/${quizTypeUrl}`);
  }
}
