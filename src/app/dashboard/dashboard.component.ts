import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  redesSociais: any;

  constructor() { }

  ngOnInit() {
    this.redesSociais = [
      { id: 1, nome: "Facebook", img: '../assets/imgs/icons/facebook.png' },
      { id: 2, nome: "Twitter", img: '../assets/imgs/icons/twitter-logo.png' },
      { id: 3, nome: "Instagram", img: '../assets/imgs/icons/instagram.png' },
      { id: 4, nome: "Google Meu Negócio", img: '../assets/imgs/icons/google-meu-negocio.png' },
      { id: 5, nome: "Pinterest", img: '../assets/imgs/icons/pinterest.png' },
      { id: 6, nome: "Linkedin", img: '../assets/imgs/icons/linkedin.png' },
      { id: 7, nome: "Youtube", img: '../assets/imgs/icons/youtube.png' },
      { id: 8, nome: "WhatsApp", img: "../assets/imgs/icons/whastapp.png" },
      { id: 9, nome: "Google Analytics", img: "../assets/imgs/icons/analytics.png" }
    ]
  }

}
