/* データアクセス関数 */

//************************************************************************************************
//
//時刻フォーマットの変更
//
//@param IN タイムスタンプ
//@return   フォーマットされた時刻
//
//************************************************************************************************
function convertFromFirestoreTimestampToDatetime(timestamp) {
    const _d = timestamp ? new Date(timestamp * 1000) : new Date();
    const Y = _d.getFullYear();
    const m = (_d.getMonth() + 1).toString().padStart(2, '0');
    const d = _d.getDate().toString().padStart(2, '0');
    const H = _d.getHours().toString().padStart(2, '0');
    const i = _d.getMinutes().toString().padStart(2, '0');
    const s = _d.getSeconds().toString().padStart(2, '0');
    return `${Y}/${m}/${d} ${H}:${i}:${s}`;
}

//************************************************************************************************
//
//firebaseからデータ読み出し（未使用）
//
//@param IN : 無し
//@return   : firebaseデータの塊
//
//************************************************************************************************
function firebaseDataInit() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyAxft5DF9MnsnbTZGywDs4SkcljfMSQSjY",
        authDomain: "team-c-13512.firebaseapp.com",
        databaseURL: "https://team-c-13512.firebaseio.com",
        projectId: "team-c-13512",
        storageBucket: "team-c-13512.appspot.com",
        messagingSenderId: "764246205884",
        appId: "1:764246205884:web:42805c139b5fdfb8a777b9"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    let db = firebase.firestore().collection('post');

    // let firebaseData = { test: 'aaa' };
    let firebaseData = {};

    db.get()
        .then(function (querySnapshot) {

            querySnapshot.forEach(function (doc) {
                // console.log(doc.id, " => ", doc.data());

                // console.log(doc.id);
                firebaseData[doc.id] = doc.data();
                // console.log(firebaseData[doc.id]);
                // console.log("firebaseData['8Kqq8y2r6smtKDpIV3C3']");
                // console.log(firebaseData['8Kqq8y2r6smtKDpIV3C3']);
                // firebaseData.set(doc.id, doc.data());
                // firebaseData = Object.assign(firebaseData, doc.data());

            });
            // console.log('querySnapshot.val()');
            // console.log(querySnapshot.getValue());
            console.log('firebaseから全部引っ張ってきた');
            console.log(firebaseData);
            // console.log(firebaseData['5snea8qt27zYlj3hh0HR']);
            // alert(firebaseData);
            return firebaseData;

        });

    sleep(5, function () {

        console.log('firebaseDataInitの中で5秒経過しました！');

    });
    // console.log('firebaseから全部引っ張ってきた');
    // console.log(firebaseData);
    // console.log(firebaseData['5snea8qt27zYlj3hh0HR']);
    // alert(firebaseData);




}

//************************************************************************************************
//
// データ初期化(ローカルストレージバージョン)
//
// @param IN : なし
// @return   : データの塊
//
//************************************************************************************************
function localDataInit() {
    if (localStorage.getItem('localDataJson') === null) {
        let localData;
        //ローカルストレージの初期設定(最終的にはここはfirebaseにアクセス)
        localData = {
            keshiki_0001: {
                //< iframe src="https://www.google.com/maps/embed?pb=!4v1593765358970!6m8!1m7!1sNwa-koOQMUJAGrbAhb_5cg!2m2!1d33.58632479363997!2d130.3836489953995!3f268.8431591021055!4f8.550929291236955!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria- hidden="false" tabindex = "0" ></iframe >
                url: 'https://www.google.com/maps/embed?pb=!4v1593765358970!6m8!1m7!1sNwa-koOQMUJAGrbAhb_5cg!2m2!1d33.58632479363997!2d130.3836489953995!3f268.8431591021055!4f8.550929291236955!5f0.7820865974627469',
                title: '大濠公園',
                postUser: 'ユーザ１',
                postDate: '2020/07/07',
                likeUser: ['a', 'b'],
                clickNum: 0,
                tag: ['タグa', 'タグb', 'タグc', 'タグd', 'タグe', 'タグf', 'タグg', 'タグh', 'タグi', 'タグj', 'タグk'],
            },
            keshiki_0002: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593765731488!6m8!1m7!1sZgE9jSNR6akM7576e4AX-w!2m2!1d36.37318060451013!2d-106.5052204618661!3f182.5904027313087!4f-9.738863410754263!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593765731488!6m8!1m7!1sZgE9jSNR6akM7576e4AX-w!2m2!1d36.37318060451013!2d-106.5052204618661!3f182.5904027313087!4f-9.738863410754263!5f0.7820865974627469',
                title: 'アビクィウ大濠, ニューメキシコ州',
                postUser: 'ユーザ１',
                postDate: '2020/07/07',
                likeUser: ['a'],
                clickNum: 1,
                tag: ['タグa', 'タグb', 'タグc', 'タグd', 'タグe', 'タグf', 'タグg', 'タグh', 'タグi', 'タグj'],
            },
            keshiki_0003: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593765990196!6m8!1m7!1scg4KQ3e_bnIHgfETZu8Rnw!2m2!1d68.15168332102503!2d-149.4397601506735!3f228.5532886068326!4f2.313598206844077!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593765990196!6m8!1m7!1scg4KQ3e_bnIHgfETZu8Rnw!2m2!1d68.15168332102503!2d-149.4397601506735!3f228.5532886068326!4f2.313598206844077!5f0.7820865974627469',
                title: 'ノース・スロープ・ハウル・ロード',
                postUser: 'ユーザ１',
                postDate: '2020/07/07',
                likeUser: ['a', 'b'],
                clickNum: 2,
                tag: ['タグa', 'タグb', 'タグc', 'タグd', 'タグe', 'タグf', 'タグg', 'タグh', 'タグi'],
            },
            keshiki_0004: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593767520856!6m8!1m7!1sziRwvgRQBwrYgBgOh9ICAg!2m2!1d62.35158196997606!2d27.87478841281143!3f139.5007!4f0!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593767520856!6m8!1m7!1sziRwvgRQBwrYgBgOh9ICAg!2m2!1d62.35158196997606!2d27.87478841281143!3f139.5007!4f0!5f0.7820865974627469',
                title: 'バルカウス, 北サヴォ',
                postUser: 'ユーザ１',
                postDate: '2020/07/07',
                likeUser: ['a', 'b', 'c'],
                clickNum: 3,
                tag: ['タグa', 'タグb', 'タグc', 'タグd', 'タグe', 'タグf', 'タグg', 'タグh'],
            },
            keshiki_0005: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593767622803!6m8!1m7!1suIeRVYOd_y2Wgs1NndhI3w!2m2!1d59.85449987538056!2d17.64288129320445!3f40!4f20!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593767622803!6m8!1m7!1suIeRVYOd_y2Wgs1NndhI3w!2m2!1d59.85449987538056!2d17.64288129320445!3f40!4f20!5f0.7820865974627469',
                title: 'どこか',
                postUser: 'ユーザ１',
                postDate: '2020/07/07',
                likeUser: ['a', 'b', 'c', 'd'],
                clickNum: 4,
                tag: ['タグa', 'タグb', 'タグc', 'タグd', 'タグe', 'タグf', 'タグg'],
            },
            keshiki_0006: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593767716817!6m8!1m7!1sc4m7uOPsOywITEEKs1NKkg!2m2!1d55.72303659426959!2d37.59726612232607!3f51.05987659527561!4f1.8944132506340594!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593767716817!6m8!1m7!1sc4m7uOPsOywITEEKs1NKkg!2m2!1d55.72303659426959!2d37.59726612232607!3f51.05987659527561!4f1.8944132506340594!5f0.7820865974627469',
                title: 'ゴーリキイ公園',
                postUser: 'ユーザ１',
                postDate: '2020/07/07',
                likeUser: ['a', 'b', 'c', 'd', 'e'],
                clickNum: 5,
                tag: ['タグa', 'タグb', 'タグc', 'タグd', 'タグe', 'タグf'],
            },
            keshiki_0007: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593767907612!6m8!1m7!1sCAoSLEFGMVFpcE5UQjVoZ0NYMEpaZUs3R1E1eUQ3OHNPNThnQmxTZURtVFFrbE9P!2m2!1d64.32699468216775!2d-20.12138418853283!3f207.65462844877706!4f-21.980327340195274!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593767907612!6m8!1m7!1sCAoSLEFGMVFpcE5UQjVoZ0NYMEpaZUs3R1E1eUQ3OHNPNThnQmxTZURtVFFrbE9P!2m2!1d64.32699468216775!2d-20.12138418853283!3f207.65462844877706!4f-21.980327340195274!5f0.7820865974627469',
                title: 'グトルフォス',
                postUser: 'ユーザ１',
                postDate: '2020/07/07',
                likeUser: ['a', 'b', 'c', 'd', 'e', 'f'],
                clickNum: 6,
                tag: ['タグa', 'タグb', 'タグc', 'タグd', 'タグe'],
            },
            keshiki_0008: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593767975990!6m8!1m7!1s8Z7lxnXGhTOn-Jd9NwnleQ!2m2!1d66.89697233746034!2d-52.86077458574512!3f209.9678830640806!4f19.71723855911216!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593767975990!6m8!1m7!1s8Z7lxnXGhTOn-Jd9NwnleQ!2m2!1d66.89697233746034!2d-52.86077458574512!3f209.9678830640806!4f19.71723855911216!5f0.7820865974627469',
                title: 'サルファングアク',
                postUser: 'ユーザ１',
                postDate: '2020/07/07',
                likeUser: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
                clickNum: 7,
                tag: ['タグa', 'タグb', 'タグc', 'タグd'],
            },
            keshiki_0009: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593768055998!6m8!1m7!1sK3BatRcgIr2tReyEEOTUbw!2m2!1d48.5698147454879!2d-53.95661015573212!3f240!4f10!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593768055998!6m8!1m7!1sK3BatRcgIr2tReyEEOTUbw!2m2!1d48.5698147454879!2d-53.95661015573212!3f240!4f10!5f0.7820865974627469',
                title: 'テラ・ノバ国立公園',
                postUser: 'ユーザ１',
                postDate: '2020/07/07',
                likeUser: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
                clickNum: 8,
                tag: ['タグa', 'タグb', 'タグc'],
            },
            keshiki_0010: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593768132509!6m8!1m7!1sCAoSLEFGMVFpcFBucndaMEZzWmhuTWJBMTRvdlByS0h4MFZ1bUFEYUFPc0E3WEpK!2m2!1d-17.73884440433061!2d-44.22866808740807!3f20.037523!4f0!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593768132509!6m8!1m7!1sCAoSLEFGMVFpcFBucndaMEZzWmhuTWJBMTRvdlByS0h4MFZ1bUFEYUFPc0E3WEpK!2m2!1d-17.73884440433061!2d-44.22866808740807!3f20.037523!4f0!5f0.7820865974627469',
                title: 'ジョアキン・フェリーシオ',
                postUser: 'ユーザ１',
                postDate: '2020/07/07',
                likeUser: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
                clickNum: 9,
                tag: ['タグa', 'タグb'],
            },
            keshiki_0011: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593768206321!6m8!1m7!1s5fdFixUnY0oMdPH32A1b4g!2m2!1d-39.93207097157656!2d175.0531009259716!3f339.5892590514302!4f7.21189160494221!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593768206321!6m8!1m7!1s5fdFixUnY0oMdPH32A1b4g!2m2!1d-39.93207097157656!2d175.0531009259716!3f339.5892590514302!4f7.21189160494221!5f0.7820865974627469',
                title: 'クィーンズ・パーク',
                postUser: 'ユーザ１',
                postDate: '2020/07/07',
                likeUser: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
                clickNum: 10,
                tag: ['タグa', 'タグb'],
            },
            keshiki_0012: {
                //<iframe src="https://www.google.com/maps/embed?pb=!4v1593768281137!6m8!1m7!1smfsdVRvwZrF5XNZTCbnwMg!2m2!1d81.37874220760318!2d-76.81391384896602!3f320!4f20!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                url: 'https://www.google.com/maps/embed?pb=!4v1593768281137!6m8!1m7!1smfsdVRvwZrF5XNZTCbnwMg!2m2!1d81.37874220760318!2d-76.81391384896602!3f320!4f20!5f0.7820865974627469',
                title: 'クッティニルパーク国立公園 大濠',
                postUser: 'ユーザ2',
                postDate: '2020/07/07',
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

//************************************************************************************************
//
// 前回見ていたインデックス番号を取得
//
// @param IN なし
// @return 前回見ていたインデックス番号
//
//************************************************************************************************
function getStartIndex() {

    let startIndex;
    // sessionStorage に保存した開始Indexを取得する
    if (sessionStorage.getItem('startIndex') === null) {

        startIndex = 0;

        console.log(`sessionStrage なし ${startIndex}`);

        // sessionStorage に開始Indexを保存する
        sessionStorage.setItem('startIndex', startIndex);
    }
    else {
        // sessionStorage から開始Index読み出し
        startIndex = Number(sessionStorage.getItem('startIndex'));

        console.log(`sessionStrage あり ${startIndex}`);
    }
    return startIndex;
}

//************************************************************************************************
//
// 連想配列を無理やりインデックス付き配列に変換する関数
//
// @param  IN thumbObj 連想配列
// @return 連想配列をインデックス付き配列にしたもの
//
//************************************************************************************************
function getThumbnailArray(thumbObj) {
    let pageData = [];
    let thumbNo = 0;
    let pageNo = 0;
    let keys = Object.keys(thumbObj);

    console.log(`keys  ${keys}`)

    for (let keshikiNo = 0; keshikiNo < Object.keys(thumbObj).length; keshikiNo++) {
        pageData[thumbNo] = thumbObj[keys[keshikiNo]];
        thumbNo++;
    }
    return pageData;
}

//************************************************************************************************
//
// サムネイル作成関数
//
// @param IN keys        連想配列のキーをインデックス化したもの
// @param IN pageData    景色データが入ったインデックス付き配列
// @param IN startIndex  開始Index
// @param IN pageMax     １ページに表示する最大件数
// @return               無し
//
//************************************************************************************************
function createThumbnail(keys, pageData, startIndex, pageMax) {
    let htmlText = '';
    let loopMax;

    //表示件数がサムネイルの最大数より小さい場合は表示件数をMAXとする
    if (pageData.length < pageMax) {
        loopMax = pageData.length;
    } else {
        loopMax = pageMax;
    }
    for (let i = 0; i < loopMax; i++) {
        htmlText += `
                <form action="view.html" method="get">
                    <div>
                        <input type='hidden' name='viewID' id='viewID' value='${keys[startIndex + i]}'>
                    </div>
                    <iframe
                        src="${pageData[startIndex + i].url}"
                        width="400"
                        height="300"
                        frameBorder="0"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0">
                    </iframe>
                    <p>${pageData[startIndex + i].title}</p>
                    <button>閲覧</button>
                    <p>♡</p>
                    <p>Tag</p>
                </form>
            `
    }
    $('#mainWindowArea').html(htmlText);
}

//************************************************************************************************
//
// サムネイル作成関数
//
// @param IN keys       : 連想配列のキーをインデックス化したもの
// @param IN pageData   : 景色データが入ったインデックス付き配列
// @param IN startIndex : 開始Index
// @param IN pageMax    : １ページに表示する最大件数
// @return              : 無し
//
//************************************************************************************************
function createThumbnail2(keys, pageData, startIndex, pageMax) {
    let htmlText = '';
    let loopMax;

    //表示件数がサムネイルの最大数より小さい場合は表示件数をMAXとする
    if (pageData.length - startIndex < pageMax) {
        loopMax = pageData.length - startIndex;
    } else {
        loopMax = pageMax;
    }
    console.log(`loopMax  ${loopMax}`);
    console.log(`startIndex  ${startIndex}`);
    console.log(pageData);
    for (let i = 0; i < loopMax; i++) {
        htmlText += `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <!-- <img class="bd-placeholder-img card-img-top" src="img/river.jpg" alt="川"> -->
                    <iframe class="bd-placeholder-img card-img-top"
                        src="${pageData[startIndex + i].url}"
                        width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""
                        aria-hidden="false" tabindex="0"></iframe>

                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
                    <!-- Thumbnail -->
                    <div class="card-body">
                        <p class="card-text">${pageData[startIndex + i].title}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">

                                <form action="view.html" method="get">
                                    <input type='hidden' name='viewID' id='viewID' value='${keys[startIndex + i]}'>
                                    <button type="submit" class="btn btn-sm btn-outline-secondary">
                                        View
                                    </button>
                                </form>

                                
                            </div>
                            <!-- ハートマーク -->
                            <button type="button" id="heart"
                                class="_1hjZT _1jjdS _1CBrG _1WPby xLon9 Onk5k _17avz _1EJJ-"><svg
                                    class="BWSrD" version="1.1" viewbox="0 0 32 32" width="15" height="15"
                                    aria-hidden="false">
                                    <path
                                        d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z">
                                    </path>
                                </svg><span class="badge badge-light">4</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `
    }
    $('#mainWindowArea2').html(htmlText);
    //$('.container').html(htmlText);
}

//************************************************************************************************
//
// ページリンク作成関数
//
// @param IN pageData : 景色データが入ったインデックス付き配列
// @param IN pageMax  : 1ページに表示する最大件数
// @return            : 無し
//
//************************************************************************************************
function createNextPageLink(pageData, pageMax) {
    let htmlText = '';
    //必要なページ数を割り出す
    let pageNum = Math.floor(pageData.length / pageMax);
    if ((pageData.length % pageMax) != 0) {
        pageNum++;
    }
    for (let i = 0; i < pageNum; i++) {
        htmlText += `
                    <div>
                        <button id='pageLink_${i}' name='pageLink' value=${i + 1}>${i + 1}</button>
                    </div>
                `
    }

    $('#nextPageLinkArea').html(htmlText);
}

//************************************************************************************************
//
// ページネーション作成関数
//
// @param IN pageData : 景色データが入ったインデックス付き配列
// @param IN pageMax  : 1ページに表示する最大件数
// @return            : 無し
//
//************************************************************************************************
function createPageNation(pageData, pageMax) {

    //
    //bootstrapを使ったページネーションのタグ
    //
    let htmlText = `
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center" >
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>`;
    //
    //必要なページ数は表示する配列のインデックス数を、１ページに表示する最大件数で割り算した商
    //ただし、割り切れた場合はそのまま使えるが、割り切れていない場合はプラス１ページしなければならない
    //
    let pageNum = Math.floor(pageData.length / pageMax);
    if ((pageData.length % pageMax) != 0) {
        pageNum++;
    }

    //
    //ページネーションは必要な数だけ作成する。上限は今の所設けていない。
    //
    for (let i = 0; i < pageNum; i++) {
        htmlText += `
                            <li class="page-item">
                                <a class="page-link" name="pageLink" href="#">${i + 1}</a>
                            </li>`;
    }

    //
    //bootstrapを使ったページネーションのタグ
    //
    htmlText += `            
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>`;

    //
    //IDがnextPageLinkAreaの場所にHTMLを埋め込み
    //
    $('#nextPageLinkArea').html(htmlText);
}

//************************************************************************************************
//
//１つの景色を表示させる
//
//@param IN 景色データ連想配列
//@param IN 景色データキー
//
//************************************************************************************************
function createView(keshikiData, viewID) {
    let viewUrl = keshikiData[`${viewID}`].url;
    let viewTitle = keshikiData[`${viewID}`].title;
    let htmlText = '';
    htmlText += `
            <div class="card mb-4 shadow-sm">
                <div class="embed-responsive embed-responsive-4by3">
                    <iframe
                        class="bd-placeholder-img card-img-top img-fluid"
                        src=${viewUrl}
                        width="100%"
                        height="auto"
                        frameBorder="0"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>

                <div class="card-body">
                    <p class="card-text">${viewTitle}</p>
                    <button type="button" id="heart" class="_1hjZT _1jjdS _1CBrG _1WPby xLon9 Onk5k _17avz _1EJJ-">
                        <svg class="BWSrD" version="1.1" viewbox="0 0 32 32" width="15" height="15" aria-hidden="false">
                            <path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path>
                        </svg>
                        <span class="badge badge-light">4</span>
                    </button>
                    <class class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-light my-1 btn-outline-secondary rounded-pill">＃山</button>
                            <button type="button" class="btn btn-light my-1 btn-outline-secondary rounded-pill">＃海</button>
                            <button type="button" class="btn btn-light my-1 btn-outline-secondary rounded-pill">＃空</button>
                            <button type="button" class="btn btn-light my-1 btn-outline-secondary rounded-pill">＃旅</button>
                        </div>
                        <button type="button" class="btn btn-light my-1 btn-outline-primary rounded-pill">一覧に戻る</button>
                    </class>
                </div>
            </div>`;
    $('#viewArea').html(htmlText);
}


function sleep(waitSec, callbackFunc) {

    // 経過時間（秒）
    var spanedSec = 0;

    // 1秒間隔で無名関数を実行
    var id = setInterval(function () {

        spanedSec++;

        // 経過時間 >= 待機時間の場合、待機終了。
        if (spanedSec >= waitSec) {

            // タイマー停止
            clearInterval(id);

            // 完了時、コールバック関数を実行
            if (callbackFunc) callbackFunc();
        }
    }, 1000);

}
