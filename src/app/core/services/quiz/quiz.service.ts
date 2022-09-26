import { Quiz } from '../../models/quiz.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators';
import { StoreService } from '../store/store';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(
    private readonly http: HttpClient,
    private readonly store: StoreService
  ) {}

  getQuizJson(): Observable<Quiz[]> {
    return this.http
      .get<Quiz[]>('assets/data/quiz.json')
      .pipe(tap((quiz) => this.store.set('questions', quiz)));
  }
}
