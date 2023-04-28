import { Component, OnInit } from '@angular/core';

// menuitem import for items type on navbar
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    // navbar items
    this.items = [
      {
        label: 'HOME',
        icon: 'pi pi-home'
      },
      {
        label: 'STAKING',
        icon: 'pi pi-home'
      },
    ];
  }
}
