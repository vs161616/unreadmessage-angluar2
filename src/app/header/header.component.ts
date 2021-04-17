import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MessageServiceService } from "../message-service.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private messageService: MessageServiceService,
    private router: Router
  ) {}
  counter: any = 3;
  ngOnInit(): void {}
  sendmessage(event: any) {
    if (event.target) {
      this.messageService.send(1);
      // this.messageService.messageData.next(1);
      this.router.navigateByUrl("/home");
      this.counter = 0;
    } else {
      this.counter = 3;
    }
  }
}
