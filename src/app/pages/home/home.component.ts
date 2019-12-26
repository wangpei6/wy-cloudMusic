import { Component, OnInit, ViewChild } from '@angular/core';

import { NzCarouselComponent } from 'ng-zorro-antd';
import { Banner, HotTags, HotSheetList, Singer } from 'src/app/services/data-types/common-types';

import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { SheetService } from 'src/app/services/sheet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  @ViewChild(NzCarouselComponent, { static: true }) private nzCarousel: NzCarouselComponent;
  carouselActiveIndex = 0;
  banners: Banner[];
  tags: HotTags[];
  sheets: HotSheetList[];
  singers: Singer[];

  constructor(
    private route: ActivatedRoute,
    private sheetServe: SheetService
  ) {
    this.route.data.pipe(map(res => res.homeDatas)).subscribe(([banners, tags, sheets, singer]) => {
      this.banners = banners;
      this.tags = tags;
      this.sheets = sheets;
      this.singers = singer;
    });
    // this.getBanners();
    // this.getHotTags();
    // this.getHotSheetList();
    // this.getEnterSinger();
  }
  // getBanners() {
  //   this.homeServe.getBanners().subscribe(banners => {
  //     this.banners = banners;
  //   });
  // }

  // getHotTags() {
  //   this.homeServe.getHotTags().subscribe(tags => {
  //     this.tags = tags;
  //   });
  // }

  // getHotSheetList() {
  //   this.homeServe.getHotSheetList().subscribe(sheets => {
  //     this.sheets = sheets;
  //   });
  // }

  // private getEnterSinger() {
  //   this.singerServe.getEnterSinger().subscribe(singer => {
  //     this.singers = singer;
  //   });
  // }

  ngOnInit() {
  }
  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }

  onChangeSlide(type: string) {
    this.nzCarousel[type]();
  }

  onPlaySheet(id: number) {
    this.sheetServe.playSheet(id).subscribe(res => {
      console.log(res);
    });
  }
}
