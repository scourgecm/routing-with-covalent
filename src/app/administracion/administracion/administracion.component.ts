import { Component, OnInit } from '@angular/core';
import { NavLink } from 'src/app/layout/sidenav-container/nav-link.model';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss'],
})
export class AdministracionComponent implements OnInit {
  events: string[] = [];
  opened: boolean;

  links: NavLink[] = [
    {
      label: 'Planificadores',
      routerLink: '/planificadores',
      icon: 'assignment',
    },
    {
      label: 'Supervisores',
      routerLink: '/supervisores',
      icon: 'supervisor_account',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
