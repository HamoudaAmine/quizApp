import { Component, OnInit } from '@angular/core';
import { QuizService } from '@core/services/quiz/quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly quizService: QuizService) {}

  ngOnInit(): void {
    this.loadQuiz();
  }

  loadQuiz() {
    this.quizService.getQuizJson().subscribe();
  }
}
