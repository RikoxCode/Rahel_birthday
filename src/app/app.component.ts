import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'birthday';
  isPlaying = false;
  isPaused = false;
  audio = new Audio();

  audioProgress = signal(0);

  playAudio(): void {
    this.audio.src = 'assets/liqwyd-birthday(chosic.com).mp3';
    this.audio.load();
    this.isPlaying = true;
    this.isPaused = false;
    this.audio.play();
    this.audio.addEventListener('ended', this.audioEnded.bind(this));
    this.audio.addEventListener('timeupdate', this.calculateProgress.bind(this));
  }

  private calculateProgress(event: Event): void {
    const currentTime = (event.target as HTMLAudioElement).currentTime;
    const progress = (currentTime / this.audio.duration) * 100;
    this.audioProgress.set(progress);
  }

  audioEnded(): void {
    this.isPlaying = false;
    this.isPaused = false;
  }

  resetPause(): void {
    this.isPaused = false;
    this.isPlaying = true;
    this.audio.play();
  }

  pauseAudio(): void {
    this.audio.pause();
    this.isPlaying = false;
    this.isPaused = true;
  }

  stopAudio(): void {
    this.audio.pause();
    this.isPlaying = false;
    this.isPaused = false;
    this.audio.currentTime = 0;
  }
}
