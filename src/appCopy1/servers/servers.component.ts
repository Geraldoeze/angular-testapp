import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
 allowNewServer = false;
 serverCreationStatus = 'No server was created';
 serverName = '';
 username='';
 serverCreated = false;

 constructor() {
  setTimeout(() => {
    this.allowNewServer = true
  }, 2000)
 }

 //the on in onCreateServer tells us who will call this method. on the DOM
 onCreateServer() {
  this.serverCreated=true;
 this.serverCreationStatus = 'Server was created'
 }
 onUpdateServerName(event: any) {
  this.serverName = (<HTMLInputElement>event.target).value
 }
}
