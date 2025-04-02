import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigDataService {

  public quizRoutingData = [
    { url: 'geoquest', subName: 'Geography'},
    { url: 'histquest', subName: 'History'},
    { url: 'bioquest', subName: 'Biology'},
    { url: 'chemquest', subName: 'Chemistry'},
    { url: 'genquest', subName: 'General'}
  ]

  public geoUrl = 'geoquest';
  public histUrl = 'histquest';
  public chemUrl = 'chemquest';
  public bioUrl = 'bioquest';
  public genUrl = 'genquest';

  public geoSubName = 'Geography';
  public histSubName = 'History';
  public chemSubName = 'Chemistry';
  public bioSubName = 'Biology';
  public genSubName = 'General';

  private sharedDataSubjectUrl: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public subjectUrl$: Observable<string> = this.sharedDataSubjectUrl.asObservable();

  private sharedDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public subject$: Observable<string> = this.sharedDataSubject.asObservable();

  updateSubjectUrl(newUrl: string): void {
    this.sharedDataSubjectUrl.next(newUrl);
  }

  updateSubject(newSubject: string): void {
    this.sharedDataSubject.next(newSubject);
  }

  getCurrentUrl(): any {
    return this.sharedDataSubjectUrl.value;
  }

  getCurrentSubject(): string {
    return this.sharedDataSubject.value;
  }
}
