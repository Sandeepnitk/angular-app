import { Component } from '@angular/core';

@Component({
  selector: 'app-cardiology',
  templateUrl: './cardiology.component.html',
  styleUrls: ['./cardiology.component.css']
})
export class CardiologyComponent {
  webinars = [
    {
      image: 'assets/images/seven.png',
      credits: 2,
      title: 'The Covid19 Management of Parox Health caretine',
      organization: 'by PDGI Indonesia',
      watchNow: true,
      icon: 'assets/icons/card_icon.png',
      notify: false,
      mute:false,
    },
    {
     image: 'assets/images/five.png',
      credits: 3,
      title: 'New Perspectives in The Covid19 Management of Parox Health caretine...',
      organization: 'by PDGI Indonesia',
      watchNow: false,
      notify: true,
      icon: 'assets/icons/card_icon.png',
      goLive: '7 Jan 2025, 12:30 PM',
      mute:false,
    },
    {
     image: 'assets/images/second_image.png',
      credits: 1.5,
      title: 'Metapneumovirus is like any other respiratory virus that causes common',
      organization: 'Bayer Indonesia',
      status: 'live',
      icon: 'assets/icons/bayer.png',
      // date: '15 Dec 2024',
      watchNow: true,
      notify: false,
      mute:true,
    }
  ];

}
