import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {
  @Input() list:any;
  
  
  constructor() { }

 ngOnInit() {

}

}
