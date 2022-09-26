import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerFormat',
})
export class TimerFormatPipe implements PipeTransform {
  readonly digitNmber = 4;

  transform(counter: number | null) {
    const counterStr = counter?.toString();
    return counterStr?.padStart(this.digitNmber, '0');
  }
}
