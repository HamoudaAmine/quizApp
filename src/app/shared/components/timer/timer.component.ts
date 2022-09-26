import { map, take } from 'rxjs/internal/operators';
import { Component, OnInit } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { StoreService } from '@core/services/store/store';

const QUIZ_TIME = 120; // 120 second
const QUIZ_TIME_STEP = 1000; // in mS

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  timer$!: Observable<number>;

  constructor(private readonly store: StoreService) {}

  ngOnInit(): void {
    this.startTimer$();
  }

  startTimer$() {
    this.timer$ = timer(1000, QUIZ_TIME_STEP).pipe(
      map((second) => {
        let counter = QUIZ_TIME - second;
        if (counter == 0) {
          this.store.set('timeUp', true);
        }
        return counter;
      }),
      take(QUIZ_TIME + 1)
    );
  }
}
