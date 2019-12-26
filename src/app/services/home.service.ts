import { Injectable, Injector, Inject } from '@angular/core';
import { ServicesModule, API_CONFIG } from './services.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Banner, HotTags, HotSheetList } from './data-types/common-types';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private uri: string
  ) { }
  // 获取轮播图数据
  getBanners(): Observable<Banner[]> {
    return this.http.get(this.uri + 'banner')
      .pipe(map((res: { banners: Banner[] }) => res.banners));
  }
  // 获取热门标签数据
  getHotTags(): Observable<HotTags[]> {
    return this.http.get(this.uri + 'playlist/hot')
      .pipe(map((res: { tags: HotTags[] }) => {
        return res.tags.sort((x: HotTags, y: HotTags) => {
          return x.position - y.position;
        }).slice(0, 5);
      }));
  }
  // 获取热门歌单数据
  getHotSheetList(): Observable<HotSheetList[]> {
    return this.http.get(this.uri + 'personalized')
      .pipe(map((res: { result: HotSheetList[] }) => res.result.slice(0, 16)));
  }

}
