import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../../models/Alblix';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  @Input() public film!: Film;

  constructor() { }

  ngOnInit(): void {
  }

}
