import { Component, OnInit } from '@angular/core';
import { menuList } from '../shared/menu-list';

@Component({
  selector: 'app-slide-nav',
  templateUrl: './slide-nav.component.html',
  styleUrls: ['./slide-nav.component.css']
})
export class SlideNavComponent implements OnInit {


  events: string[] = [];
  opened: boolean;

  shouldRun = true;
  sideMenu = menuList;
  collapse = false;

  
    constructor(
    ) {  }
  ngOnInit(): void {
  }

  toggleSidebar(){
    this.collapse = !this.collapse
  }

}
