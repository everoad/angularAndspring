import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
  
    constructor(
        private http: Http
    ) { }
    
    getData(): Promise<JSON> {
        var data = {
            name: 'everoad',
            age: '30'
        };
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('spring/api/board', JSON.stringify(data), { headers: headers }).toPromise()
            .then(res => res.json());
    }
}