import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import MetisMenu from 'metismenujs';

import { MENU_ITEMS_ADMIN, MENU_ITEMS_SUPERADMIN } from './menu';
import { MenuItem } from './menu.model';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: MenuItem[] = [];

        /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
         hasItems(item: MenuItem) {
          return item.subItems !== undefined ? item.subItems.length > 0 : false;
        }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2, 
    router: Router
  ) {
   
   }

  ngOnInit(): void {

    this.menuItems = MENU_ITEMS_ADMIN


  }

}
