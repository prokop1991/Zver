import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Фермы',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Профиль',  icon:'person', class: '' },
    { path: '/table-list', title: 'Таблицы',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Иконки',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Карта',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Ововищение',  icon:'notifications', class: '' },
    { path: '/logout', title: 'Выйти',  icon:'cancel', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  dropdown_show: boolean = false;
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  dropdown_show_fn(){
    this.dropdown_show = !this.dropdown_show
  }
}
