import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Request } from '@angular/http';
import { HttpClient , HttpHeaders} from '@angular/common/http' ;

@Injectable()
export default class UserService {



  constructor( @Inject("API_HOST") private host: string, private httpClient: HttpClient) {
    console.log("In User Service API Host = " + host);
  }

  getFullData(userId: string): Object {
    return {
      username: "Pankaj Bhatt",
      address: "167 Gramercy Square Beach, Delray Beach FL 33484"
    };
  }

  getLoginUserDetails(): any {

    return this.httpClient.get(this.host + "/posts/").;
  }
}
