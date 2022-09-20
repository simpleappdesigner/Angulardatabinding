import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
 // @Input() element:{type:string, name:string,content:string};
  @Input('srvElement') element:{type:string, name:string,content:string};
  //input is decorator
  // now expose this property as srvElement so input will be
  //@Input('srvElement')

  constructor() { }

  ngOnInit(): void {
  }

}
