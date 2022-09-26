import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StoreService } from '@core/services/store/store';
import { map } from 'rxjs/internal/operators';

@Injectable({ providedIn: 'root' })
export class ResultsGuard implements CanActivate {
  constructor(
    private readonly store: StoreService,
    private readonly router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.store.select('score').pipe(
      map((score) => {
        if (score == '') {
          this.router.navigate(['/home']);
          return false;
        }
        return true;
      })
    );
  }
}
