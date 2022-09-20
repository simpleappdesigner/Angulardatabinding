import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //serverElements = [];
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}> ();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}> ();
  newServerName = "";
  newServerContent  = "";

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(eventdata){
   this.serverCreated.emit(eventdata);
  }

  onAddBlueprint(eventdata){
    this.blueprintCreated.emit(eventdata);
  
  }

}
