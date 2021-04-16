import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageService:MessageServiceService) { }

  ngOnInit(): void {
    localStorage.setItem("isvisited",'true')
  }
  // setMessage(event:any) {
  //   console.log(event.value);
  //   this.messageService.messageData.next('hello');
  // }

}
