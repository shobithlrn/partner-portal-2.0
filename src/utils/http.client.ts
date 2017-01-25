import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class HttpClient {

  constructor(private http: Http) {}

  createAuthorizationHeader() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', localStorage.getItem('x-access-token'))
    return headers
  }

  get(url) {
    return this.http.get(url, {
      headers: this.createAuthorizationHeader()
    })
    //.catch(this.handleError);
  }

  post(url, data) {
    return this.http.post(url, data, {
      headers: this.createAuthorizationHeader()
    })
    //.catch(this.handleError);
  }


  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}