import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  public messageData = new Subject<any>()
  constructor() { }

  send(value:any){
    let obj:any = {
      "message1":"Hello  this side alexender !!",
      "message2":"How Are You ??",
      "message3":"I am fine"
    }
    this.messageData.next(obj)
    // this.messageData.next({ text: message });
  }
  getMessage(): Observable<any> {
        return this.messageData.asObservable();
    }
}
