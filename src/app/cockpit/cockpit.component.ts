import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output()
  serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  @Output()
  blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  @ViewChild("serverContent") serverContent: ElementRef;

  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName) {
    this.serverCreated.emit({ serverName: serverName.value, serverContent:this.serverContent.nativeElement.value});
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint(serverName) {
    this.blueprintCreated.emit({ serverName: serverName.value, serverContent: this.serverContent.nativeElement.value});
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}
