import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-side-menu',
  styleUrl: './side-menu.css',
  templateUrl: './side-menu.html',
})
export class SideMenu {}
