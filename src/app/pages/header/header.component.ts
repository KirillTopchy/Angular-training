import { Component, OnInit } from '@angular/core';
import { MenuItems } from 'src/app/shared/models/menu-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItems[] = [
    {
      path:'/counter',
      title: 'Simple Counter'
    },
    {
      path: 'login',
      title: 'Login'
    },
    {
      path: 'planner',
      title: 'Planner'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
