import { Component, OnInit } from '@angular/core';
// import { Slider } from 'ngx-slider';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  pgt: any;
  // public slider = new Slider();
  constructor() {
    // Slider
      // this.slider.config.loop = true;
      // this.slider.config.showPreview = false;
      // this.slider.config.transitionDuration = 3;
      // this.slider.config.showDots = false;

  // Data
      this.pgt = [
      {
        pid: 1,
        ptype: 'commercial',
        routerLink: ['/features'],
        text1: `Hilston by Urbtech`,
        budget: '58.9 Lac',
        text3: 'Urbtech India',
        bhk: '2 & 3 BHK ',
        cotegory: 'Flats',
        text5: 'Marketed By Urbtech India • Sector 79, Noida',
        pgtbtn1: 'See Details',
        image: 'http://198.12.156.249:45001/pd/assets/images/landing/slide1.jpg'
      },
      {
        pid: 2,
        ptype: 'residential',
        routerLink: ['/features'],
        text1: 'ATS Dolce',
        budget: '46.5 Lac',
        text3: 'ATS Infrastructure Ltd',
        bhk: '2, 3, 4 BHK',
        cotegory: 'Flats',
        text5: 'By ATS Infrastructure Ltd | Zeta 1, Greater Noida',
        pgtbtn1: 'See Details',
        image: 'http://198.12.156.249:45001/pd/assets/images/landing/slide.jpg'
      },
      {
        pid: 3,
        ptype: 'residential',
        routerLink: ['/features'],
        text1: 'Trident Embassy',
        budget: '32.6 Lac',
        text3: 'Trident Infrahomes',
        bhk: '2, 3 & 4 BHK BHK',
        cotegory: 'Flats',
        text5: 'By Trident Infrahomes Pvt Ltd | Noida Extension, Noida',
        pgtbtn1: 'See Details',
        image: 'http://198.12.156.249:45001/pd/assets/images/landing/slide2.jpg'
      },
      {
        pid: 4,
        ptype: 'residential',
        routerLink: ['/features'],
        text1: 'Stellar One Phase 1',
        budget: '30.8 Lac',
        text3: 'Stellar Group',
        bhk: '2 & 3 BHK',
        cotegory: 'Villas',
        text5: 'By Stellar Group | Greater Noida West, Greater Noida',
        pgtbtn1: 'See Details',
        image: 'http://198.12.156.249:45001/pd/assets/images/landing/slide3.jpg'
      },

      {
        pid: 5,
        ptype: 'residential',
        routerLink: ['/features'],
        text1: 'XS Real Catalunya City',
        budget: '25.8 Lac',
        text3: 'XS Real Properties ',
        bhk: '2, 2.5, 3 BHK',
        cotegory: 'Flats',
        text5: 'XS Real Properties Private Limited, Chennai',
        pgtbtn1: 'See Details',
        // tslint:disable-next-line: max-line-length
        image: 'http://198.12.156.249:45001/pd/assets/images/landing/slide4.jpg'
      },

      {
        pid: 6,
        ptype: 'residential',
        routerLink: ['/features'],
        text1: 'Olympia Opaline Sequel',
        budget: '1 crore',
        text3: 'Olympia Group',
        bhk: ' 3 & 4 BHK',
        cotegory: 'villas',
        text5: 'By Olympia Group • Navalur, OMR, Chennai',
        pgtbtn1: 'See Details',
        image: 'http://198.12.156.249:45001/pd/assets/images/landing/slide5.jpg'
      },

      {
        pid: 7,
        ptype: 'residential',
        routerLink: ['/features'],
        text1: 'Umang Winter Hills',
        budget: '1 crore',
        text3: 'Umang Hills Group',
        bhk: '1, 2 BHK',
        cotegory: 'Flats',
        text5: 'Umang Winter Hills Dwarka Mor, New Delhi',
        pgtbtn1: 'See Details',
        image:
          'http://198.12.156.249:45001/pd/assets/images/projectgellary/pg-6.jpg'
      },

      {
        pid: 8,
        ptype: 'residential',
        routerLink: ['/features'],
        text1: 'The Amaryllis',
        budget: '1 crore',
        text3: 'The Amaryllis Group',
        bhk: '1, 2 BHK',
        cotegory: 'Flats',
        text5: 'The Amaryllis Karol Bagh, New Delhi',
        pgtbtn1: 'See Details',
        image:
          'http://198.12.156.249:45001/pd/assets/images/projectgellary/pg-7.jpg'
      },

      {
        pid: 9,
        ptype: 'residential',
        routerLink: ['/features'],
        text1: 'Planner N Maker',
        budget: '1 crore',
        text3: 'Planner Maker Group',
        bhk: '1, 2 BHK',
        cotegory: 'Flats',
        text5: 'Planner Maker Homes Uttam Nagar, New Delhi',
        pgtbtn1: 'See Details',
        image:
          'http://198.12.156.249:45001/pd/assets/images/projectgellary/pg-9.jpg'
      },

      {
        pid: 10,
        ptype: 'residential',
        routerLink: ['/features'],
        text1: 'ATS',
        budget: '1 crore',
        text3: 'ATS Picturesque Reprieves',
        bhk: '1, 2 BHK',
        cotegory: 'Flats',
        text5: 'ATS Picturesque Reprieves At Sector 152, Noida',
        pgtbtn1: 'See Details',
        image: 'http://198.12.156.249:45001/pd/assets/images/landing/slide6.jpg'
      },

      {
        pid: 11,
        ptype: 'residential',
        routerLink: ['/features'],
        text1: 'Supertech UpCountry',
        budget: '13.9 Lac',
        text3: 'Supertech UpCountry Group',
        bhk: '1, 2 & 3 BHK',
        cotegory: 'Studio & Flats',
        text5: 'Supertech UpCountry Group At Greater Noida',
        pgtbtn1: 'See Details',
        image: 'http://198.12.156.249:45001/pd/assets/images/landing/slide7.jpg'
      },

      {
        pid: 12,
        ptype: 'residential',
        routerLink: ['/features'],
        text1: 'Parx Laureate',
        budget: '2.20 crore',
        text3: 'Laureate Buildwell',
        bhk: '3 & 4 BHK',
        cotegory: 'Flats',
        text5: 'Laureate Buildwell Pvt Ltd • Sector 108, Noida',
        pgtbtn1: 'See6 Details',
        image: 'http://198.12.156.249:45001/pd/assets/images/landing/slide8.jpg'
      }
    ];
  }
  ngOnInit() {
    // const slideItems = [
    //   {
    //     src:
    //       'http://198.12.156.249:45001/pd/assets/images/slider/1/carousel1.jpg'
    //   },
    //   {
    //     src:
    //       'http://198.12.156.249:45001/pd/assets/images/slider/1/carousel2.jpg'
    //   },
    //   {
    //     src:
    //       'http://198.12.156.249:45001/pd/assets/images/slider/1/carousel3.jpg'
    //   },
    //   {
    //     src:
    //       'http://198.12.156.249:45001/pd/assets/images/slider/1/carousel4.jpg'
    //   },
    //   {
    //     src:
    //       'http://198.12.156.249:45001/pd/assets/images/slider/1/carousel5.jpg'
    //   }
    // ];

    // this.slider.items = slideItems;
  }
}
