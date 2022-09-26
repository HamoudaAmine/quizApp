import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerFormatPipe } from './pipes/timer-format.pipe';
import { HeaderComponent } from './components/header/header.component';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [HeaderComponent, TimerComponent, TimerFormatPipe],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  exports: [
    MatButtonModule,
    HeaderComponent,
    TimerComponent,
    TimerFormatPipe,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
  ],
})
export class SharedModule {}
