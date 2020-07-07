/* データアクセス関数 */

/*
 * データ初期化
 * IN なし
 * OUT データの塊
 */
function dataInit() {
    if (localStorage.getItem('localDataJson') === null) {
        let localData;
        //ローカルストレージの初期設定(最終的にはここはfirebaseにアクセス)
        localData = {
            keshiki_0001: {
                //< iframe src="https://www.google.com/maps/embed?pb=!4v1593765358970!6m8!1m7!1sNwa-koOQMUJAGrbAhb_5cg!2m2!1d33.58632479363997!2d130.3836489953995!3f268.8431591021055!4f8.550929291236955!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria- hidden="false" tabindex = "0" ></iframe >
                url: 'https://www.google.com/maps/embed?pb=!4v1593765358970!6m8!1m7!1sNwa-koOQMUJAGrbAhb_5cg!2m2!1d33.58632479363997!2d130.3836489953995!3f268.8431591021055!4f8.550929291236955!5f0.7820865974627469',
                title: '大濠公園',
                likeUser: ['a', 'b'],
                clickNum: 0,
                tag: ['タグa', 'タグb', 'タグc', 'タグd', 'タグe', 'タグf', 'タグg', 'タグh', 'タグi', 'タグj', 'タグk'],
            },
            keshiki_0002: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593765731488!6m8!1m7!1sZgE9jSNR6akM7576e4AX-w!2m2!1d36.37318060451013!2d-106.5052204618661!3f182.5904027313087!4f-9.738863410754263!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593765731488!6m8!1m7!1sZgE9jSNR6akM7576e4AX-w!2m2!1d36.37318060451013!2d-106.5052204618661!3f182.5904027313087!4f-9.738863410754263!5f0.7820865974627469',
                title: 'アビクィウ, ニューメキシコ州',
                likeUser: ['a'],
                clickNum: 1,
                tag: ['タグa', 'タグb', 'タグc', 'タグd', 'タグe', 'タグf', 'タグg', 'タグh', 'タグi', 'タグj'],
            },
            keshiki_0003: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593765990196!6m8!1m7!1scg4KQ3e_bnIHgfETZu8Rnw!2m2!1d68.15168332102503!2d-149.4397601506735!3f228.5532886068326!4f2.313598206844077!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593765990196!6m8!1m7!1scg4KQ3e_bnIHgfETZu8Rnw!2m2!1d68.15168332102503!2d-149.4397601506735!3f228.5532886068326!4f2.313598206844077!5f0.7820865974627469',
                title: 'ノース・スロープ・ハウル・ロード',
                likeUser: ['a', 'b'],
                clickNum: 2,
                tag: ['タグa', 'タグb', 'タグc', 'タグd', 'タグe', 'タグf', 'タグg', 'タグh', 'タグi'],
            },
            keshiki_0004: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593767520856!6m8!1m7!1sziRwvgRQBwrYgBgOh9ICAg!2m2!1d62.35158196997606!2d27.87478841281143!3f139.5007!4f0!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593767520856!6m8!1m7!1sziRwvgRQBwrYgBgOh9ICAg!2m2!1d62.35158196997606!2d27.87478841281143!3f139.5007!4f0!5f0.7820865974627469',
                title: 'バルカウス, 北サヴォ',
                likeUser: ['a', 'b', 'c'],
                clickNum: 3,
                tag: ['タグa', 'タグb', 'タグc', 'タグd', 'タグe', 'タグf', 'タグg', 'タグh'],
            },
            keshiki_0005: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593767622803!6m8!1m7!1suIeRVYOd_y2Wgs1NndhI3w!2m2!1d59.85449987538056!2d17.64288129320445!3f40!4f20!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593767622803!6m8!1m7!1suIeRVYOd_y2Wgs1NndhI3w!2m2!1d59.85449987538056!2d17.64288129320445!3f40!4f20!5f0.7820865974627469',
                title: 'どこか',
                likeUser: ['a', 'b', 'c', 'd'],
                clickNum: 4,
                tag: ['タグa', 'タグb', 'タグc', 'タグd', 'タグe', 'タグf', 'タグg'],
            },
            keshiki_0006: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593767716817!6m8!1m7!1sc4m7uOPsOywITEEKs1NKkg!2m2!1d55.72303659426959!2d37.59726612232607!3f51.05987659527561!4f1.8944132506340594!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593767716817!6m8!1m7!1sc4m7uOPsOywITEEKs1NKkg!2m2!1d55.72303659426959!2d37.59726612232607!3f51.05987659527561!4f1.8944132506340594!5f0.7820865974627469',
                title: 'ゴーリキイ公園',
                likeUser: ['a', 'b', 'c', 'd', 'e'],
                clickNum: 5,
                tag: ['タグa', 'タグb', 'タグc', 'タグd', 'タグe', 'タグf'],
            },
            keshiki_0007: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593767907612!6m8!1m7!1sCAoSLEFGMVFpcE5UQjVoZ0NYMEpaZUs3R1E1eUQ3OHNPNThnQmxTZURtVFFrbE9P!2m2!1d64.32699468216775!2d-20.12138418853283!3f207.65462844877706!4f-21.980327340195274!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593767907612!6m8!1m7!1sCAoSLEFGMVFpcE5UQjVoZ0NYMEpaZUs3R1E1eUQ3OHNPNThnQmxTZURtVFFrbE9P!2m2!1d64.32699468216775!2d-20.12138418853283!3f207.65462844877706!4f-21.980327340195274!5f0.7820865974627469',
                title: 'グトルフォス',
                likeUser: ['a', 'b', 'c', 'd', 'e', 'f'],
                clickNum: 6,
                tag: ['タグa', 'タグb', 'タグc', 'タグd', 'タグe'],
            },
            keshiki_0008: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593767975990!6m8!1m7!1s8Z7lxnXGhTOn-Jd9NwnleQ!2m2!1d66.89697233746034!2d-52.86077458574512!3f209.9678830640806!4f19.71723855911216!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593767975990!6m8!1m7!1s8Z7lxnXGhTOn-Jd9NwnleQ!2m2!1d66.89697233746034!2d-52.86077458574512!3f209.9678830640806!4f19.71723855911216!5f0.7820865974627469',
                title: 'サルファングアク',
                likeUser: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
                clickNum: 7,
                tag: ['タグa', 'タグb', 'タグc', 'タグd'],
            },
            keshiki_0009: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593768055998!6m8!1m7!1sK3BatRcgIr2tReyEEOTUbw!2m2!1d48.5698147454879!2d-53.95661015573212!3f240!4f10!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593768055998!6m8!1m7!1sK3BatRcgIr2tReyEEOTUbw!2m2!1d48.5698147454879!2d-53.95661015573212!3f240!4f10!5f0.7820865974627469',
                title: 'テラ・ノバ国立公園',
                likeUser: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
                clickNum: 8,
                tag: ['タグa', 'タグb', 'タグc'],
            },
            keshiki_0010: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593768132509!6m8!1m7!1sCAoSLEFGMVFpcFBucndaMEZzWmhuTWJBMTRvdlByS0h4MFZ1bUFEYUFPc0E3WEpK!2m2!1d-17.73884440433061!2d-44.22866808740807!3f20.037523!4f0!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593768132509!6m8!1m7!1sCAoSLEFGMVFpcFBucndaMEZzWmhuTWJBMTRvdlByS0h4MFZ1bUFEYUFPc0E3WEpK!2m2!1d-17.73884440433061!2d-44.22866808740807!3f20.037523!4f0!5f0.7820865974627469',
                title: 'ジョアキン・フェリーシオ',
                likeUser: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
                clickNum: 9,
                tag: ['タグa', 'タグb'],
            },
            keshiki_0011: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593768206321!6m8!1m7!1s5fdFixUnY0oMdPH32A1b4g!2m2!1d-39.93207097157656!2d175.0531009259716!3f339.5892590514302!4f7.21189160494221!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593768206321!6m8!1m7!1s5fdFixUnY0oMdPH32A1b4g!2m2!1d-39.93207097157656!2d175.0531009259716!3f339.5892590514302!4f7.21189160494221!5f0.7820865974627469',
                title: 'クィーンズ・パーク',
                likeUser: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
                clickNum: 10,
                tag: ['タグa', 'タグb'],
            },
            keshiki_0012: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593768281137!6m8!1m7!1smfsdVRvwZrF5XNZTCbnwMg!2m2!1d81.37874220760318!2d-76.81391384896602!3f320!4f20!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593768281137!6m8!1m7!1smfsdVRvwZrF5XNZTCbnwMg!2m2!1d81.37874220760318!2d-76.81391384896602!3f320!4f20!5f0.7820865974627469',
                title: 'クッティニルパーク国立公園',
                likeUser: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
                clickNum: 11,
                tag: ['タグa'],
            },
        }
        //ローカルストレージに書き込み
        jsonData = JSON.stringify(localData)
        localStorage.setItem('localDataJson', jsonData);
    }
    else {
        //ローカルストレージから読み出し
        jsonData = localStorage.getItem('localDataJson');
        localData = JSON.parse(jsonData);
    }

    return localData;
}