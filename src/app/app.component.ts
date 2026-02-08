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
    // Safe DOM manipulation - using textContent instead of innerHTML
    const outputElement = document.getElementById('output');
    if (outputElement) {
      outputElement.textContent = value;
    }
  }

  // Safe code execution - removed eval, using Function constructor with validation
  executeScript(code: string) {
    // Alternative: Use a safe sandbox or remove this functionality entirely
    console.log('Code execution disabled for security reasons');
  }

  safeRedirect(url: string) {
    // Safe redirect with URL validation
    try {
      const urlObj = new URL(url, window.location.origin);
      // Only allow same-origin redirects or whitelisted domains
      if (urlObj.origin === window.location.origin) {
        window.location.href = urlObj.href;
      } else {
        console.error('External redirects not allowed');
      }
    } catch (e) {
      console.error('Invalid URL');
    }
  }
}
