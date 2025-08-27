import { Component } from '@angular/core';

@Component({
  selector: 'app-webinar-list',
  templateUrl: './webinar-list.component.html',
  styleUrls: ['./webinar-list.component.css']
})
export class WebinarListComponent {
 liveWebinars = [
    {
      image: 'assets/images/first_image.png',
      title: 'Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthama from',
      organizer: 'PDGI Indonesia',
      credits: 2,
      icon: 'assets/icons/card_icon.png',
      duration: '24:50',
      mute:false,
      keyHighlights: 'Manage chronic and complex diseases'
    },
    {
      image: 'assets/images/second_image.png',
      title: 'Virus is like any other respiratory virus that causes common',
      organizer: 'GSK',
      credits: 1.5,
      icon: 'assets/icons/gsk.png',
      mute:false,
      expiry: '23h 30m',
      duration: '24:50',
      keyHighlights: 'Manage chronic and complex diseases'
    },
    {
      image: 'assets/images/third_image.png',
      title: 'Virus is like any other respiratory virus that causes common',
      organizer: 'Bayer',
      credits: 2,
      mute:true,
      icon: 'assets/icons/bayer.png',
      duration: '24:50',
      keyHighlights: 'Manage chronic and complex diseases'
    }
  ];

  upcomingWebinars = [
    {
      image: 'assets/images/four.png',
      title: 'The Covid19 Management of Parox Health caretime',
      organizer: 'PDGI Indonesia',
      credits: 1.5,
      expiry: '20 days',
      mute:false,
      icon: 'assets/icons/card_icon.png',
      schedule: '7 Jan 2025, 12:30 PM',
      keyHighlights: 'Manage chronic and complex diseases'
    },
    {
      image: 'assets/images/five.png',
      title: 'Perspectives in The Covid19 Management of Parox Health',
      organizer: 'PDGI Indonesia',
      icon: 'assets/icons/card_icon.png',
      credits: 2,
      mute:false,
      schedule: '7 Jan 2025, 12:30 PM',
      keyHighlights: 'Manage chronic and complex diseases'
    },
    {
      image: 'assets/images/six.png',
      title: 'The Covid19 Management of Parox Health caretine',
      organizer: 'PDGI Indonesia',
      icon: 'assets/icons/card_icon.png',
      credits: 2,
      mute:true,
      schedule: '7 Jan 2025, 12:30 PM',
      keyHighlights: 'Manage chronic and complex diseases'
    }
  ];

   cardiology = [
    {
      image: 'assets/images/first_image.png',
      title: 'Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthama from',
      organizer: 'PDGI Indonesia',
      credits: 2,
      duration: '24:50',
      keyHighlights: 'Manage chronic and complex diseases'
    },
    {
      image: 'assets/images/second_image.png',
      title: 'Virus is like any other respiratory virus that causes common',
      organizer: 'GSK',
      credits: 1.5,
      expiry: '23h 30m',
      duration: '24:50',
      keyHighlights: 'Manage chronic and complex diseases'
    },
    {
      image: 'assets/images/third_image.png',
      title: 'Virus is like any other respiratory virus that causes common',
      organizer: 'Bayer',
      credits: 2,
      duration: '24:50',
      keyHighlights: 'Manage chronic and complex diseases'
    }
  ];

   webinars = [
    {
      image: 'assets/images/seven.png',
      credits: 2,
      title: 'The Covid19 Management of Parox Health caretine',
      organization: 'by PDGI Indonesia',
      watchNow: true,
      notify: false
    },
    {
     image: 'assets/images/five.png',
      credits: 3,
      title: 'New Perspectives in The Covid19 Management of Parox Health caretine...',
      organization: 'by PDGI Indonesia',
      watchNow: false,
      notify: true,
      goLive: '7 Jan 2025, 12:30 PM'
    },
    {
     image: 'assets/images/second_image.png',
      credits: 1.5,
      title: 'Metapneumovirus is like any other respiratory virus that causes common',
      organization: 'Bayer Indonesia',
      status: 'live',
      // date: '15 Dec 2024',
      watchNow: true,
      notify: false
    }
  ];


  // continueWatching = [
  //   { image: 'assets/images/seven.png', title: 'New Perspectives in Covid19', keyHighlights: 'Management strategies' },
  //   { image: 'assets/images/seven.png', title: 'Eczema & Allergy', keyHighlights: 'Skin deep insights' },
  //   { image: 'assets/images/seven.png', title: 'Covid19 Case Studies', keyHighlights: 'Healthcare impact' }
  // ];
  continueWatching = [
  {
    image: 'assets/images/seven.png',
    speakerImage: 'assets/images/speaker1.png',
    title: 'New Perspectives in The Covid19 Management',
    keyHighlights: 'Pfizer Indonesia',
    presenter: 'Pfizer Indo...',
    timeLeft: '24:50',
    minutesLeft: 10
  },
  {
    image: 'assets/images/seven.png',
    speakerImage: 'assets/images/speaker2.png',
    title: 'More Than Skin Deep: Treating Eczema and Allergy',
    keyHighlights: 'Columbia Asia',
    presenter: 'Dr. Ooi Siew Hwa',
    timeLeft: '14:32',
    minutesLeft: 20
  },
  {
    image: 'assets/images/seven.png',
    speakerImage: 'assets/images/speaker2.png',
    title: 'More Than Skin Deep: Treating Eczema and Allergy',
    keyHighlights: 'Columbia Asia',
    presenter: 'Dr. Ooi Siew Hwa',
    timeLeft: '14:32',
    minutesLeft: 20
  },
  {
    image: 'assets/images/seven.png',
    speakerImage: 'assets/images/speaker2.png',
    title: 'More Than Skin Deep: Treating Eczema and Allergy',
    keyHighlights: 'Columbia Asia',
    presenter: 'Dr. Ooi Siew Hwa',
    timeLeft: '14:32',
    minutesLeft: 20
  },
  {
    image: 'assets/images/seven.png',
    speakerImage: 'assets/images/speaker2.png',
    title: 'More Than Skin Deep: Treating Eczema and Allergy',
    keyHighlights: 'Columbia Asia',
    presenter: 'Dr. Ooi Siew Hwa',
    timeLeft: '14:32',
    minutesLeft: 20
  }
];

  


  topics = [
  { name: 'Cardiologist', count: 4 },
  { name: 'Emergency', count: 2 },
  { name: 'General Medicine', count: 9 },
  { name: 'General Medicine', count: 4 },
  { name: 'Emergency Medicine', count: 8 },
  { name: 'General Medicine', count: 4 },
  { name: 'Emergency Medicine', count: 8 },
  { name: 'Cardiologist', count: 4 },
  { name: 'General Medicine', count: 9 },
  { name: 'General Medicine', count: 4 },
  { name: 'Emergency', count: 2 },
  { name: 'Cardiologist', count: 4 },
  { name: 'Emergency Medicine', count: 8 },
];

specialties = [
  'Acupuncture',
  'Allergy and Immunology',
  'Anaesthesiology',
  'Clinical Nutrition',
  'General Practitioner'
];

webinarsfooter = [
  {
    organization: 'PDGI Indonesia',
    sponsor: 'Roche',
    time: '30 min ago',
    image: 'assets/images/f1.png',
    duration: '24:50',
    credits: 1.5,
    expiry: '23h 30m',
    title: 'Perspectives in The Covid19 Management of Parox Health caretine',
    highlights: 'Manage chronic and complex diseases',
    likes: 20,
    comments: 12,
    views: 750
  },
  {
    organization: 'PDGI Indonesia',
    sponsor: 'Roche',
    time: '1 hour ago',
    image: 'assets/images/f2.png',
    duration: '24:50',
    credits: 2,
    expiry: '2 days',
    title: 'New Perspectives in COVID-19 and Parox Health',
    highlights: 'Insights on patient safety and chronic management',
    likes: 45,
    comments: 9,
    views: 1250
  },
];

webinars2 = [
  {
    organization: 'PDGI Indonesia',
    sponsor: 'Roche',
    time: '30 min ago',
    image: 'assets/images/f3.png',
    duration: '24:50',
    credits: 2,
    expiry: '12 days',
    live: true,
    title: 'New Perspectives in The Covid19 Management of Parox Health caretine',
    highlights: 'Manage chronic and complex diseases',
    likes: 20,
    comments: 12,
    views: 750
  },
  {
    organization2: 'PDGI Indonesia',
    sponsor: 'Roche',
    time: '30 min ago',
    image: 'assets/images/f4.png',
    duration: '24:50',
    credits: 3,
    expiry: null,
    live: false,
    title: 'The Covid19 Management of Parox Health caretine',
    highlights: 'Manage chronic and complex diseases',
    likes: 20,
    comments: 12,
    views: 750
  }
];


}


