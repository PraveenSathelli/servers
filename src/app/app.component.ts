import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sample2';
  serverElements = [{ type: "server", name: "testserver", content: "just server" }];


  onServerAdded(event: {serverName:string,serverContent:string }) {
    this.serverElements.push({
      type: 'server',
      name: event.serverName,
      content: event.serverContent
    });
  }

  onBlueprintAdded(event: {serverName:string,serverContent:string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: event.serverName,
      content: event.serverContent
    });
  }
}
