import { Component, OnInit } from '@angular/core';
import {Alblix, Film} from './models/Alblix';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {

  public alblix:Alblix;
  public sciFi:Film;
  public animacion:Film;

  constructor() {
    this.alblix={
      navbar:{
        logo:{
          src:'/assets/AlbixLogo.png',
          alt:'Alblix Logo'
        }
      },
      hero:{
        title: 'Los 5 preferidos de Alba',
        imgGallery:[
          {
          src:'/assets/loscinco/lasemilla.jpg',
          alt:'La semilla del diablo'
        },
        {
          src:'/assets/loscinco/RockyHorror.jpg',
          alt:'Rocky Horror picture show'
        },
        {
          src:'/assets/loscinco/Tiburon.jpg',
          alt:'Tiburon'
        },
        {
          src:'/assets/loscinco/Totoroposterzima.jpg',
          alt:'Totoro'
        },
        {
          src:'/assets/loscinco/Zombieland.jpg',
          alt:'Zombieland'
        }
        ]
      }
    },
    this.sciFi={
      title: 'Ciencia ficción de Alba',
      imgGallery:[
        {
          src:'/assets/scifi/Armageddon.jpg',
          alt:'Armageddon'
        },
        {
          src:'/assets/scifi/desafio.jpg',
          alt:'Desafio Total'
        },
        {
          src:'/assets/scifi/elquinto.jpg',
          alt:'El quinto elemento'
        },
        {
          src:'/assets/scifi/Origen.jpg',
          alt:'Origen'
        },
        {
          src:'/assets/scifi/StarTrek.jpg',
          alt:'La ira de Khan'
        }
      ]
    };
    this.animacion ={
      title: 'Animación de Alba',
      imgGallery:[
        {
          src:'/assets/Animacion/5cent.jpg',
          alt:'Cinco centímetros por segundo'
        },
        {
          src:'/assets/Animacion/chihiro.jpg',
          alt:'El viaje de Chihiro'
        },
        {
          src:'/assets/Animacion/inside.jpg',
          alt:'Del revés'
        },
        {
          src:'/assets/Animacion/todoslosperros.jpg',
          alt:'Todos los perros van al cielo'
        },
        {
          src:'/assets/Animacion/unicornio.jpg',
          alt:'El último unicornio'
        }
      ]
    }
  }

  ngOnInit(): void {
  }

}
