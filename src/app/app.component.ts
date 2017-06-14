import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  routes = [];
  currentPage = '/';

  constructor(
    private _router: Router
  ){
    this._router.events.subscribe((val: NavigationEnd) => {
        // see also 
        const url = val.urlAfterRedirects;

        this.currentPage = url;
    });
  }

  ngOnInit(): void {
    
  }

  nextPage(){

    const index = this.routes.indexOf(this.currentPage);

    if(index === this.routes.length - 1){
      return;
    }

    const newRoute = this.routes[index + 1];

    this._router.navigate([newRoute]);
  }

  prevPage(){
    const index = this.routes.indexOf(this.currentPage);

    if(index === 0){
      return;
    }

    const newRoute = this.routes[index - 1];

    this._router.navigate([newRoute]);
  }

  isFirstPage(){
    const index = this.routes.indexOf(this.currentPage);
    return index === 0;
  }

  isLastPage(){

    const index = this.routes.indexOf(this.currentPage);
    return index === this.routes.length - 1;
  }
}