import { ResultsComponent } from './components/results/results.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsGuard } from '@core/guards/results.guard';

const routes: Routes = [
  {
    path: '',
    component: ResultsComponent,
    canActivate: [ResultsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultsRoutingModule {}
