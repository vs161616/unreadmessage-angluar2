import { Component, OnInit } from "@angular/core";
import { MessageServiceService } from "../message-service.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  message: any;
  subscription: any;

  constructor(private messageService: MessageServiceService) {}

  ngOnInit(): void {
    // this.message = {
    //   message1: "Hello  this side alexender !!",
    //   message2: "How Are You ??",
    //   message3: "I am fine"
    // };
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.message = message;
        console.log(this.message);
      }
    });
  }
}
