export type Banner = {
    targetId: number;
    url: string;
    imgUrl: string;
}
export type HotTags = {
    id: number;
    name: string;
    position: number;
}

// 歌手的数据类型
export type Singer = {
    id: number,
    name: string,
    picUrl: string,
    albumSize: number
}
// 歌曲详情的数据类型
export type Song = {
    id: number,
    name: string,
    url: string,
    ar: Singer[], // 这首歌的歌手
    al: {
        id: number,
        name: string,
        picUrl: string,
    },
    dt: number
}
// 歌单的数据类型
export type HotSheetList = {
    id: number,
    name: string,
    picUrl: string,
    playCount: number,
    tracks: Song[]
}
//歌曲播放地址
export type SongUrl = {
    id: number,
    url: string
}
