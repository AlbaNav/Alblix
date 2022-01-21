import { Component, Input, OnInit } from '@angular/core';
import {Navbar} from '../../models/Alblix'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() public navbar!: Navbar
  public btnText: string = '🙈'



  constructor() { }

  ngOnInit(): void {
  }
 public setDarkTheme(): void {
   document.body.classList.toggle('dark-theme');
   this.btnText== '🙈' ? this.btnText = '😎' : this.btnText = '🙈'
 }
}
