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
      { nome: "Facebook", img: '../assets/imgs/icons/facebook.png' },
      { nome: "Instagram", img: '../assets/imgs/icons/instagram.png' },
      { nome: "Twitter", img: '../assets/imgs/icons/twitter-logo.png' },
      { nome: "Google Meu Negócio", img: '../assets/imgs/icons/google-meu-negocio.png' },
      { nome: "Pinterest", img: '../assets/imgs/icons/pinterest.png' },
      {nome:"Linkedin", img:'../assets/imgs/icons/linkedin.png'},
      {nome:"Youtube", img:'../assets/imgs/icons/youtube.png'},
      {nome:"WhatsApp", img:"../assets/imgs/icons/whastapp.png"},
      {nome:"Google Analytics", img:"../assets/imgs/icons/analytics.png"}
    ]
  }

}
