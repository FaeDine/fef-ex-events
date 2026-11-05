import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model-demo',
  standalone: false,
  templateUrl: './ng-model-demo.html',
  styleUrl: './ng-model-demo.css',
})
export class NgModelDemo {
  name: String = '';
  active: boolean = false;
  gender: String = '';
  myRange: number = 0;
  carMake: String = '';
}
