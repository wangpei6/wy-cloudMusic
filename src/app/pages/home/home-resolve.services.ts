import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Resolve } from '@angular/router';
import { SingerService } from 'src/app/services/singer.service';
import { HomeService } from 'src/app/services/home.service';
import { Banner, HotTags, HotSheetList, Singer } from 'src/app/services/data-types/common-types';
import { first } from 'rxjs/internal/operators';

type HomeDataType = [Banner[], HotTags[], HotSheetList[], Singer[]];

@Injectable()
export class HomeResolveService implements Resolve<HomeDataType> {
    constructor(
        private homeServe: HomeService,
        private singerServe: SingerService,
    ) { }

    resolve(): Observable<HomeDataType> {
        return forkJoin([
            this.homeServe.getBanners(),
            this.homeServe.getHotTags(),
            this.homeServe.getHotSheetList(),
            this.singerServe.getEnterSinger()
        ]).pipe(first());
    }
}