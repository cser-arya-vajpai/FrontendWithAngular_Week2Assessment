import { Component } from '@angular/core';
import { Comp2 } from './comp2/comp2';
import { Comp1 } from './comp1/comp1';

@Component({
  selector: 'app-http',
  imports: [Comp2, Comp1],
  templateUrl: './http.html',
  styleUrl: './http.css',
})
export class Http {}
