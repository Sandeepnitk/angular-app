import { Component } from '@angular/core';

@Component({
  selector: 'app-top-speakers',
  templateUrl: './top-speakers.component.html',
  styleUrls: ['./top-speakers.component.css']
})
export class TopSpeakersComponent {
  speakers = [
    {
      name: 'Dr Chong wui',
      specialty: 'Gastroenterologist, General Physician',
      image: 'assets/images/doctor.png',
      live: true
    },
    {
      name: 'Dr Wuyama Ouramg',
      specialty: 'Gastroenterologist, Surgeon',
      image: 'assets/images/doctor.png',
      live: false
    },
    {
      name: 'Dr Wuyama Ouramg',
      specialty: 'Gastroenterologist, Surgeon',
      image: 'assets/images/doctor.png',
      live: false
    },
    {
      name: 'Dr Wuyama Ouramg',
      specialty: 'Cardiologist',
      image: 'assets/images/doctor.png',
      live: false
    },
    {
      name: 'Dr Shanya suian',
      specialty: 'Orthodontist',
      image: 'assets/images/doctor.png',
      live: false
    }
  ];
}
