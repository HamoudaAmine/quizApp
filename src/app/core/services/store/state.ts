import { Answer } from '@core/models/answer.model';
import { Quiz } from '@core/models/quiz.model';
export interface State {
  questions: Quiz[];
  ansewers: Answer[];
  timeUp: boolean;
  score: string;
}
