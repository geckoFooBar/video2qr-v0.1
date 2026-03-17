import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Import any global components here, like your GenerateQr component
import { GenerateQr } from './features/components/generate-qr/generate-qr';
import { Description } from './features/components/description/description';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GenerateQr, Description], // Add imports directly to the component
  template: `
  <div class="flex flex-col min-h-screen">
    <h1 class="text-3xl font-bold text-left my-6 mx-6 w-max">{{ title }}</h1>
    <div class="flex-grow">
      <app-description></app-description>
      <app-generate-qr></app-generate-qr>
    </div>
  </div>
  `,
})
export class App {
  title: string = 'video2QR';
}