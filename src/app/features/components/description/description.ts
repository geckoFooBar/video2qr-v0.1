import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  standalone: true,
  template: `
    <div class="flex flex-col justify-center items-center p-5">
      <h2 class="text-3xl font-bold mb-4">Welcome to video2QR!</h2>
      <p class="text-lg text-gray-700 text-center max-w-3xl text-center break-normal">
        video2QR is a simple and efficient tool that allows you to convert any video URL into a QR code. 
        Whether you want to share a YouTube video, a Vimeo clip, or any other online video, Video2QR makes it easy to generate a QR code that can be scanned by anyone with a smartphone.
        <br>Simply enter the video URL, click the "Generate QR Code" button, and your QR code will be ready to share in seconds. 
        You can also download the generated QR code for offline use or print it out to share with friends and colleagues.
      </p>
    </div>
  `,
})
export class Description {}
