import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
private storage: any;
  constructor() {
    this.storage = sessionStorage;
  }

  public retrieve(key: string):any{
    let item = this.storage.getItem(key);
    if(item !== undefined){
      return item;
    }
    return;
  }
   public store = (key: string, value: any) => this.storage.setItem(key,JSON.stringify(value));
   public renove = (key:string) =>this.storage.removeItem(key);
   public removeAll = () => this.storage.clear();
}
