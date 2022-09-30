import { Router } from '@angular/router';
import { StoreService } from './../../../core/services/store/store';
import { Answer } from '@core/models/answer.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '@core/models/quiz.model';
import { filter } from 'rxjs/internal/operators';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.scss'],
})
export class QuestionContainerComponent implements OnInit {
  quiz$!: Observable<Quiz[]>;
  questions: Quiz[] = [];
  questionIndex: number = 0;
  correctAnswer: number = 0;
  answers: Answer[] = [];
  timeUp: boolean = false;

  constructor(
    private readonly store: StoreService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.getQuiz();
    this.getTimeUp();
  }

  getQuiz() {
    this.store.select('questions').subscribe((questions) => {
      this.questions = questions;
    });
  }

  getTimeUp() {
    this.store
      .select('timeUp')
      .pipe(filter((status) => status))
      .subscribe(() => {
        this.goToResults();
      });
  }

  onChoiceMade(choice: string | string[]) {
    if (choice == '' || choice.length == 0) return;
    this.checkAnswer(choice);
    if (this.questionIndex + 1 == this.questions.length) {
      this.goToResults();
      return;
    }
    this.questionIndex++;
  }

  checkAnswer(choice: string | string[]) {
    const currentQuestion = this.questions[this.questionIndex];
    if (typeof choice === 'string') {
      const choiceFormatted = choice.trim().toLocaleLowerCase();
      const ansewerFromatted = currentQuestion.answer?.toLocaleLowerCase();
      if (choiceFormatted == ansewerFromatted) {
        this.correctAnswer++;
        this.answers.push({ label: currentQuestion.label, isCorrect: true });
      } else {
        this.answers.push({ label: currentQuestion.label, isCorrect: false });
      }
    } else {
      const choicesExist = choice.every((value) =>
        currentQuestion.answers?.includes(value)
      );

      if (choicesExist && choice.length == currentQuestion.answers?.length) {
        this.correctAnswer++;
        this.answers.push({ label: currentQuestion.label, isCorrect: true });
      } else {
        this.answers.push({ label: currentQuestion.label, isCorrect: false });
      }
    }
  }

  goToResults() {
    this.store.set('ansewers', this.answers);
    this.store.set('score', `${this.correctAnswer}/${this.questions.length}`);
    this.router.navigate(['results']);
  }
}
