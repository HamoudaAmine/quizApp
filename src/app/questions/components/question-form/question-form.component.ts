import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Quiz } from '@core/models/quiz.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
})
export class QuestionFormComponent implements OnInit {
  @Input() question!: Quiz;
  @Output() onChoiceMade = new EventEmitter<string[] | string>();
  form!: FormGroup;
  checkedArray: any[] = [];

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      choice: ['', Validators.required],
    });
  }

  onChange(event: any) {
    if (event.checked) {
      this.checkedArray.push(event.source.value);
    } else {
      this.checkedArray = this.checkedArray.filter(
        (item) => item !== event.source.value
      );
    }
  }

  onSubmit = () => {
    if (this.question.answerType == 'multiple-choice') {
      this.onChoiceMade.emit(this.checkedArray);
    } else {
      this.onChoiceMade.emit(this.form.value.choice);
    }
    this.form.reset();
  };
}
