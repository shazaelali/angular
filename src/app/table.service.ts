import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  public url = "https://run.mocky.io/v3"
  constructor(
    private _http: HttpClient) {

  }

  getALL() {
    return this._http.get("https://run.mocky.io/v3/ec762773-24bb-45ad-9360-029fd281dcc8")
  }

  getUserById(userId: number) {
    const url = `${this.url}/${userId}`;
    console.log(url)
    return this._http.get<any>(url);
  }

}

