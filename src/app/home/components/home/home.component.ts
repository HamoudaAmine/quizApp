import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { Quiz } from '@core/models/quiz.model';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/internal/operators';
import { StoreService } from '@core/services/store/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quiz$!: Observable<Quiz[]>;
  dataLoaded: boolean = false;

  constructor(
    private readonly store: StoreService,
    private readonly localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getQuiz();
  }

  getQuiz() {
    this.quiz$ = <any>this.store.select('questions').pipe(
      delay(3000),
      tap(() => {
        this.dataLoaded = true;
      })
    );
  }

  get bestScore() {
    return this.localStorageService.getBestScore();
  }
}
