import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpService {
  private headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  constructor(private http: Http) {}

  public get(url: string, params: any = {}): Observable<any> {
    return this.request('get', url, {}, params);
  }

  public post(url: string, body: any, params: any = {}): Observable<any> {
    return this.request('post', url, body, params);
  }

  public update(url: string, body: any, params: any = {}, patch: boolean = true): Observable<any> {
    const method = patch ? this.patch(url, body, params) : this.put(url, body, params);
    return method;
  }

  public delete(url: string, id: string | number, params: any = {}) {
    this.request('delete', url, {}, params);
  }

  public addHeader(key: string, value: string) {
    this.headers[key] = value;
  }

  public updateHeader(key: string, value: string) {
    this.headers[key] = value;
  }

  public resetHeaders() {
    this.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
  }

  public removeHeader(key: string) {
    delete this.headers[key];
  }
  private put(url: string, body: any, params: any = {}) {
    return this.request('patch', url, body, params)
  }
  private patch(url: string, body: any, params: any = {}): Observable<any> {
    return this.request('patch', url, body, params)

  }
  private request(method, url: string, body: any, params: any = {}) {
    console.log(this.headers);
    let headers = new Headers(this.headers);
    let endsInSlashOrParams = /.*\/$|.*\?.*/g;
    if (!endsInSlashOrParams.test(url)) {
      url += '/';
    }
    // build param string
    let paramStr = Object.keys(params).reduce((acc, cur, i) => `${acc}${i > 0 ? '&' : ''}${cur}=${params[cur]}`, '');
    let options = new RequestOptions({ headers, search: paramStr });
    let obs: any;
    if (method.toLowerCase() === 'get' || method.toLowerCase() === 'delete') {
      obs = this.http[method](url, options);
    } else {
      obs = this.http[method](url, body, options);
    }
    return obs.map((res: Response) => {
      try {
        return res.json();
      } catch (e) {
        // tslint:disable-next-line:no-console
        console.log(e);
      }
      return {};
    });
  }
}
