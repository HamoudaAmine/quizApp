import { LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '@core/services/store/store';
import { Answer } from '@core/models/answer.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  score: string = '';
  newBestScore: boolean = false;
  answers$!: Observable<Answer[]>;

  constructor(
    private readonly store: StoreService,
    private readonly localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getScore();
    this.answers$ = this.store.select('ansewers');
  }

  getScore() {
    this.store.select('score').subscribe((score) => {
      this.score = score as string;
      const bestScore = this.localStorageService.getBestScore();
      if (Number(bestScore?.charAt(0)) || 0 < Number(this.score?.charAt(0))) {
        this.localStorageService.setNewBestScore(this.score);
        this.newBestScore = true;
      }
    });
  }
}
