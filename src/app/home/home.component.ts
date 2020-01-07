import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  $: any;
  audio1 = new Audio();

  budgetdt: any;
  profiledt: any;
  purposedt: any;
  typedt: any;
  qualitydt: any;
  locariondt: any;
  propertytypedt: any;
  furnishingdt: any;
  behaviourdt: any;

  budgetseasons: string[] = ['1 Crore', '2 Crore', '3 Crore', '4 Crore', '5 Crore'];
  profileseasons: string[] = ['Business', 'Private Service', 'Govt Employee', 'Entrepreneur', 'Other'];
  purposeseasons: string[] = ['Investment', 'Business', 'Personal', 'Partner', 'Other'];
  typeseasons: string[] = ['Commercial', 'Residential', 'Plot/Farm House'];
  qualityseasons: string[] = ['Luxury', 'Ultra Luxury', 'Traditional'];
  locarionseasons: string[] = ['Tier 1 ', 'Tier 2', 'Tier 3', 'Tier 4'];
  propertytypeseasons: string[] = ['Villa', 'Apartment', 'Independent Floor', 'House'];
  furnishingseasons: string[] = ['RAW', 'SEMI-FURNISHED', 'FULLY FURNISHED', 'MINIMAL'];
  behaviourseasons: string[] = ['Internet', 'Agents', 'Hoardings', 'Newspaper', 'Expose'];

  ISADIOPLAYING = false;

  constructor() {
    setTimeout(() => {
      this.playAudio1();
    }, 1000);
    setTimeout(() => {
      this.ISADIOPLAYING = true;
    }, 11000);
    setTimeout(() => {
      this.playAudio2();
    }, 13000);

  }
  playAudio1() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice10.mp3';
      this.audio1.load();
      this.audio1.play();
    }
  }
  playAudio2() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice1.mp3';
      this.audio1.load();
      this.audio1.play();
    }
  }

  playAudio3() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice2.mp3';
      this.audio1.load();
      this.audio1.play();
    }
  }


  playAudio4() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice3.mp3';
      this.audio1.load();
      this.audio1.play();
    }
  }

  playAudio5() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice4.mp3';
      this.audio1.load();
      this.audio1.play();
    }
  }

  playAudio6() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice5.mp3';
      this.audio1.load();
      this.audio1.play();
    }
  }

  playAudio7() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice6.mp3';
      this.audio1.load();
      this.audio1.play();
    }
  }

  playAudio8() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice7.mp3';
      this.audio1.load();
      this.audio1.play();
    }
  }
  playAudio9() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice8.mp3';
      this.audio1.load();
      this.audio1.play();
    }
  }
  playAudio10() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice9.mp3';
      this.audio1.load();
      this.audio1.play();
    }
  }

  stopAudio2() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice1.mp3';
      this.audio1.load();
      this.audio1.pause();
      this.ISADIOPLAYING = false;
    }
  }

  stopAudio3() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice2.mp3';
      this.audio1.load();
      this.audio1.pause();
      this.ISADIOPLAYING = false;
    }
  }

  stopAudio4() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice2.mp3';
      this.audio1.load();
      this.audio1.pause();
      this.ISADIOPLAYING = false;
    }
  }

  stopAudio5() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice2.mp3';
      this.audio1.load();
      this.audio1.pause();
      this.ISADIOPLAYING = false;
    }
  }

  stopAudio6() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice2.mp3';
      this.audio1.load();
      this.audio1.pause();
      this.ISADIOPLAYING = false;
    }
  }

  stopAudio7() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice2.mp3';
      this.audio1.load();
      this.audio1.pause();
      this.ISADIOPLAYING = false;
    }
  }

  stopAudio8() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice2.mp3';
      this.audio1.load();
      this.audio1.pause();
      this.ISADIOPLAYING = false;
    }
  }

  stopAudio9() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice2.mp3';
      this.audio1.load();
      this.audio1.pause();
      this.ISADIOPLAYING = false;
    }
  }

  stopAudio10() {
    if (true) {
      this.audio1.src = 'http://198.12.156.249:45001/pd/assets/music/voice2.mp3';
      this.audio1.load();
      this.audio1.pause();
      this.ISADIOPLAYING = false;
    }
  }

  ngOnInit() {
  }
}

