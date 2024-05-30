import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'birthday';
  isPlaying = false;
  audio = new Audio();

  playAudio(): void {
    this.audio.src = 'assets/liqwyd-birthday(chosic.com).mp3';
    this.audio.load();
    this.isPlaying = true;
    this.audio.play();
  }

  stopAudio(): void {
    this.audio.pause();
    this.isPlaying = false;
  }
}
