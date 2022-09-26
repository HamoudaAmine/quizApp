import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() showTitle: boolean = false;
  @Input() showTimer: boolean = false;
  @Input() title: string = '';

  ngOnInit(): void {}
}
