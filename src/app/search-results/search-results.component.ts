import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
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
