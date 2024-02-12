// // import { Component, OnInit } from '@angular/core';
// // import { WebSocketService } from './web-socket.service';
// // import { RouterOutlet } from '@angular/router';
// // // import { BrowserModule } from '@angular/platform-browser';
// // import { FormsModule } from '@angular/forms';
// // // import { HttpModule } from '@angular/http';
// // import { CommonModule } from '@angular/common';

// // @Component({
// //   selector: 'app-root',
// //   standalone: true,
// //   imports: [RouterOutlet,CommonModule,
// //     FormsModule,
// //     ],
// //   templateUrl: './app.component.html',
// //   styleUrl: './app.component.css'
// // })
// // export class AppComponent implements OnInit {
 
// //   title = 'Websocket Angular client ';
// //   userName!: string;
// //   message!: string;
// //   output: any[] = [];
// //   feedback!: string;


// //   constructor(private webSocketService: WebSocketService) { }
// //   ngOnInit(): void {
// //     this.webSocketService.listen('typing').subscribe((data) => this.updateFeedback(data));
// //     this.webSocketService.listen('chat').subscribe((data) => this.updateMessage(data));
// //     this.sendMessage()
// //   }

// //   messageTyping(): void {
// //     this.webSocketService.emit('typing', this.userName);
// //   }

// //   sendMessage(): void {
// //     console.log("======================================================================");
    
// //     this.webSocketService.emit('chat', {
// //       message: "this.message",
// //       handle: "this.userName"
// //     });
// //     this.message = "";
// //   }

// //   updateMessage(data:any) {
// //     this.feedback = '';
// //     if(!!!data) return;
// //     console.log(`${data.handle} : ${data.message}`);
// //     this.output.push(data);
// //   }

// //   updateFeedback(data: any){
// //     this.feedback = `${data} is typing a message`;
// //   }
// // }


// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { WebSocketService } from './web-socket.service';
// import { Subscription } from 'rxjs'; // Import Subscription
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule, FormsModule],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit, OnDestroy {
//   title = 'Websocket Angular client';
//   userName!: string;
//   message!: string;
//   output: any[] = [];
//   feedback!: string;
//   chatSubscription: Subscription | null = null;
//   typingSubscription: Subscription | null = null;

//   constructor(private webSocketService: WebSocketService) {}

//   ngOnInit(): void {
//     this.chatSubscription = this.webSocketService.listen('chat')
//       .subscribe((data) => this.updateMessage(data));

//     this.typingSubscription = this.webSocketService.listen('typing')
//       .subscribe((data) => this.updateFeedback(data));
//   }

//   ngOnDestroy(): void {
//     this.chatSubscription?.unsubscribe();
//     this.typingSubscription?.unsubscribe();
//   }

//   messageTyping(): void {
//     this.webSocketService.emit('typing', this.userName);
//   }

//   sendMessage(): void {
//     console.log("======================================================================");
//     this.webSocketService.emit('chat', {
//       message: this.message,
//       handle: this.userName
//     });
//     this.message = "";
//   }

//   updateMessage(data: any): void {
//     this.feedback = '';
//     if (!data) {
//       return;
//     }
//     console.log(`${data.handle} : ${data.message}`);
//     this.output.push(data);
//   }

//   updateFeedback(data: any): void {
//     this.feedback = `${data} is typing a message`;
//   }
// }


import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 
  
}
