export interface Quiz {
  label: string;
  answerType: 'choice' | 'text' | 'multiple-choice';
  choices: string[];
  answer?: string;
  answers?: string[];
}
