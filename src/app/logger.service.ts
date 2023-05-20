import { Injectable } from '@angular/core';

@Injectable(
  // creating a scenario where provided in root is not supplied 
  // {
  // providedIn: 'root'
  // }
)
export class LoggerService {

  constructor() { }

  log(msg: string){
    console.log(msg)
  }
}
