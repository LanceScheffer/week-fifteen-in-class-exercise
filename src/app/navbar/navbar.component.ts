import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name:string = '';
  search: any = [];
  public currentSearch(){
    this.search.push(this.name);
    this.name = '';

  }
  constructor() { }

  ngOnInit(): void {
  }

}
