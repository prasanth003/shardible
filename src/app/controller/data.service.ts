import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient 
  ) { }

  /**
   * To register the email
   * @param email email id
   * @returns the observable
  */
  public registerEmail(email: string): Observable<any> {
    return this.httpClient.post(environment.api, { email }, {
      headers: new HttpHeaders(),
      reportProgress: true,
      observe: 'body',
      withCredentials: false
    });
  }

  /**
   * To get the total number of registered user
   * @returns the observable
  */
  public getRegisterUsers(): Observable<any> {
    return this.httpClient.get(environment.api, {
      headers: new HttpHeaders(),
      reportProgress: true,
      observe: 'body',
      withCredentials: false
    });
  }
}
