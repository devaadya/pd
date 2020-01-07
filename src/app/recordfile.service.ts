import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record } from './record';

@Injectable({
  providedIn: 'root'
})
export class RecordfileService {
  // apiUrl = 'https://imersiveux.com/Api/IRCSearch/GetIRCSearchResultToExcel';
   apiUrl = 'http://192.168.0.142/Api/IRCSearch/GetIRCSearchResultToExcel';
 // apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient, ) { }
  getUsers() {
    // return this._http.get<Record[]>(this.apiUrl + '/posts');
  //  return this._http.get<Record[]>(this.apiUrl + '/photos');
    return this._http.get<Record[]>(this.apiUrl);
  }
}
