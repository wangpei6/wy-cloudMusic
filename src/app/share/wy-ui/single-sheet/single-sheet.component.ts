import { Component, OnInit, Input, HostListener, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { HotSheetList } from 'src/app/services/data-types/common-types';


@Component({
  selector: 'app-single-sheet',
  templateUrl: './single-sheet.component.html',
  styleUrls: ['./single-sheet.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleSheetComponent implements OnInit {

  @Input() sheet: HotSheetList; // 接收父组件传递过来的值
  @Output() onPlay = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  playSheet(id: number) {
    this.onPlay.emit(id);
  }

}
