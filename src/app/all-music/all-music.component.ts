import { Component } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-music',
  templateUrl: './all-music.component.html',
  styleUrls: ['./all-music.component.css']
})
export class AllMusicComponent {

  audio1 = new Audio('assets/audio1.mp3');
  audio2 = new Audio('assets/audio2.mp3');
  audio3 = new Audio('assets/audio3.mp3');
  audio4 = new Audio('assets/audio4.mp3');
  audio5 = new Audio('assets/audio5.mp3');
  audio6 = new Audio('assets/audio6.mp3');
  audio7 = new Audio('assets/audio7.mp3');
  audio8 = new Audio('assets/audio8.mp3');

  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    // config.readonly = true;
  }
  
  playMusic1(){
    this.audio1.play()
  }
  stopMusic1(){
    this.audio1.pause()
  }
  playMusic2(){
    this.audio2.play()
  }
  stopMusic2(){
    this.audio2.pause()
  }
  playMusic3(){
    this.audio3.play()
  }
  stopMusic3(){
    this.audio3.pause()
  }
  playMusic4(){
    this.audio4.play()
  }
  stopMusic4(){
    this.audio4.pause()
  }
  playMusic5(){
    this.audio5.play()
  }
  stopMusic5(){
    this.audio5.pause()
  }
  playMusic6(){
    this.audio6.play()
  }
  stopMusic6(){
    this.audio6.pause()
  }
  playMusic7(){
    this.audio7.play()
  }
  stopMusic7(){
    this.audio7.pause()
  }
  playMusic8(){
    this.audio8.play()
  }
  stopMusic8(){
    this.audio8.pause()
  }
    
}