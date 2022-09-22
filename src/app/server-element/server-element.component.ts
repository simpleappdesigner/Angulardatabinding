import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
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
