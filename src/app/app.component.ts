import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h2>Angular CodeQL Demo</h2>
    <input #userInput>
    <button (click)="show(userInput.value)">Show</button>
    <div id="output"></div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  show(value: string) {
    // Unsafe DOM manipulation
    document.getElementById('output')!.innerHTML = value;
  }
}
