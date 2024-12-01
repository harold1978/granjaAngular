import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeFirebase } from './firebase-config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'granjaAngular';
  constructor(){
    initializeFirebase();
  }
}
