import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output() sendPageEmitter = new EventEmitter();
  @Input() pageInfo:any = {};
  constructor() { }

  ngOnInit(): void {
  }

  sendPage(page){
    this.sendPageEmitter.emit(page);
  }

}
