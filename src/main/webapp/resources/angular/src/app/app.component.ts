import { Component, OnInit } from '@angular/core';

import {AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
    
export class AppComponent implements OnInit {
    title = 'app works!';
    json: JSON;
    
    constructor(
        private appService: AppService
    ) { }
    
    ngOnInit(): void {
        this.getData();
    }
    
    getData(): void {
        this.appService.getData().then(json => this.json = json);    
    }
}
