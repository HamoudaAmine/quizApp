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
  private readonly store = this.subject
    .asObservable()
    .pipe(distinctUntilChanged());

  select<T>(name: keyof State): Observable<T> {
    return this.store.pipe(pluck<State, T>(name), distinctUntilChanged());
  }

  set(name: keyof State, value: any) {
    this.subject.next({ ...this.storeValue, [name]: value });
  }
}
