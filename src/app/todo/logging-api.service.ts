import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingAPIService {
  log(message: string) {
    console.log('from API: ' + message);
  }
}
