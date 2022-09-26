import { Injectable } from '@angular/core';

const BEST_SCORE_KEY = 'bestScore';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getBestScore(): string | null {
    return localStorage.getItem(BEST_SCORE_KEY);
  }

  setNewBestScore(score: string) {
    localStorage.setItem(BEST_SCORE_KEY, score);
  }
}
