import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  goals: Goal[] = [
    { id: 1, name: 'Watch finding Nemo', color: 'black' },
    { id: 2, name: 'Buy Cookies', color: 'black' },
    { id: 3, name: 'Get new Phone Case', color: 'yellow' },
    { id: 4, name: 'Get Dog Food', color: 'red' },
    { id: 5, name: 'Solve math homework', color: 'blue' },
    //{ id: 6, name: 'Plot my world domination plan', color: 'black' },
  ];
}
