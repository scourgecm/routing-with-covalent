import { Component, OnInit, Input } from '@angular/core';
import { NavLink } from './nav-link.model';

@Component({
  selector: 'app-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss'],
})
export class SidenavContainerComponent implements OnInit {
  @Input() links: NavLink[];

  constructor() {}

  ngOnInit() {}
}
