import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {HttpMethod}from "../constants/httpConst"
import {catchError, tap} from "rxjs/operators";
import {throwError} from "rxjs";



@Injectable()
export class BaseHttpRepository{
  constructor(private http: HttpClient){}

  public Request(method: string, url: string, headers: any, Body?: any):any{
    if(method === HttpMethod.get){
      return this.http.get<any>(url,{headers}).pipe(
        tap(console.log),
        catchError (catchError(this.handlerError)
        )
      )
    }else if(method === HttpMethod.post){
      return this.http.post<any>(url,Body,{headers}).pipe(
        tap(console.log),
        catchError (catchError(this.handlerError)
        )
      )
    }else if(method === HttpMethod.put){
      return this.http.put<any>(url,Body,{headers}).pipe(
        tap(console.log
        //   response => {
        //   console.log(response);
        // }
        ),
         catchError(this.handlerError
        // err => {
        //   console.log(err);
        //   return throwError(err);
       // }
        )
      )
    }
  }

  private handlerError(error: Response){
    console.log(error);
    const msg = 'Error status code ' + error.status + ' status ' + error.statusText + 'body ' + error.body
    return throwError(msg);
  }
}
