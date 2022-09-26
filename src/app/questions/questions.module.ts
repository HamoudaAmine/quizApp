import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './questions-routing.module';
import { QuestionContainerComponent } from './components/question-container/question-container.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuestionContainerComponent, QuestionFormComponent],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class QuestionsModule {}
