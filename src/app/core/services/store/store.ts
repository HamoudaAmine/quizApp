import { State } from './state';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/internal/operators';

const state: State = {
  questions: [],
  ansewers: [],
  timeUp: false,
  score: '',
};

@Injectable({ providedIn: 'root' })
export class StoreService {
  get storeValue() {
    return this.subject.value;
  }

  private readonly subject = new BehaviorSubject<State>(state);
  private readonly store = this.subject.asObservable();

  select<T extends keyof State>(name: T): Observable<State[T]> {
    return this.store.pipe(
      pluck<State, State[typeof name]>(name),
      distinctUntilChanged()
    );
  }

  set<T extends keyof State>(name: T, value: State[T]) {
    this.subject.next({ ...this.storeValue, [name]: value });
  }
}
