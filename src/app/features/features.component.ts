import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  featurelist: any;
  showModal: boolean;
  content: string;
  title: string;
  show() {
  this.showModal = true; // Show-Hide Modal Check
  this.content = 'This is content!!';
  this.title = 'This is title!!';    // Dynamic Data
}
hide() {
  this.showModal = false;
}
  constructor() {
    this.featurelist = [
      {
        fid: 1,
        rupee: ` ₹`,
        post: `Bellevue WA Real Estate`,
        budget: '6 crore',
        offbudget: '4 crore',
        cotegory: 'House',
        pdetails: `Asbury Park | 12821 126th Way NE, India`,
        vpbtn: 'View Propery',
        vplink: 'http://198.12.156.249:45001/pd/property',
        vdbtn: 'View Details',
        mdlid: 'prop1',
        image:
          'http://198.12.156.249:45001/pd/assets/images/property/prop-1.jpg'
      },
      {
        fid: 2,
        rupee: ` ₹`,
        post: `Asbury Park`,
        budget: '6 crore',
        offbudget: '4 crore',
        cotegory: 'House',
        pdetails: `Asbury Park | 12821 126th Way NE, India`,
        vpbtn: 'View Propery',
        vplink: 'http://198.12.156.249:45001/pd/property',
        vdbtn: 'View Details',
        mdlid: 'prop2',
        image:
          'http://198.12.156.249:45001/pd/assets/images/property/prop-2.jpg'
      },
      {
        fid: 3,
        rupee: ` ₹`,
        post: `Asbury Park`,
        budget: '5 crore',
        offbudget: '4 crore',
        cotegory: 'House',
        pdetails: `Asbury Park | 12821 126th Way NE, India`,
        vpbtn: 'View Propery',
        vplink: 'http://198.12.156.249:45001/pd/property',
        vdbtn: 'View Details',
        mdlid: 'prop3',
        image:
          'http://198.12.156.249:45001/pd/assets/images/property/prop-3.jpg'
      },
      {
        fid: 4,
        rupee: ` ₹`,
        post: `Asbury Park`,
        budget: '4 crore',
        offbudget: '3 crore',
        cotegory: 'House',
        pdetails: `Asbury Park | 12821 126th Way NE, India`,
        vpbtn: 'View Propery',
        vplink: 'http://198.12.156.249:45001/pd/property',
        vdbtn: 'View Details',
        mdlid: 'prop4',
        image:
          'http://198.12.156.249:45001/pd/assets/images/property/prop-4.jpg'
      },
      {
        fid: 5,
        rupee: ` ₹`,
        post: `Asbury Park`,
        budget: '6 crore',
        offbudget: '4 crore',
        cotegory: 'House',
        pdetails: `Asbury Park | 12821 126th Way NE, India`,
        vpbtn: 'View Propery',
        vplink: 'http://198.12.156.249:45001/pd/property',
        vdbtn: 'View Details',
        mdlid: 'prop1',
        image:
          'http://198.12.156.249:45001/pd/assets/images/property/prop-1.jpg'
      },
      {
        fid: 6,
        rupee: ` ₹`,
        post: `Asbury Park`,
        budget: '6 crore',
        offbudget: '4 crore',
        cotegory: 'House',
        pdetails: `Asbury Park | 12821 126th Way NE, India`,
        vpbtn: 'View Propery',
        vplink: 'http://198.12.156.249:45001/pd/property',
        vdbtn: 'View Details',
        mdlid: 'prop2',
        image:
          'http://198.12.156.249:45001/pd/assets/images/property/prop-2.jpg'
      },
      {
        fid: 7,
        rupee: ` ₹`,
        post: `Asbury Park`,
        budget: '5 crore',
        offbudget: '4 crore',
        cotegory: 'House',
        pdetails: `Asbury Park | 12821 126th Way NE, India`,
        vpbtn: 'View Propery',
        vplink: 'http://198.12.156.249:45001/pd/property',
        vdbtn: 'View Details',
        mdlid: 'prop3',
        image:
          'http://198.12.156.249:45001/pd/assets/images/property/prop-3.jpg'
      },
      {
        fid: 8,
        rupee: ` ₹`,
        post: `Asbury Park`,
        budget: '4 crore',
        offbudget: '3 crore',
        cotegory: 'House',
        pdetails: `Asbury Park | 12821 126th Way NE, India`,
        vpbtn: 'View Propery',
        vplink: 'http://198.12.156.249:45001/pd/property',
        vdbtn: 'View Details',
        mdlid: 'prop4',
        image:
          'http://198.12.156.249:45001/pd/assets/images/property/prop-4.jpg'
      }
    ];
  }
  ngOnInit() {}
}
