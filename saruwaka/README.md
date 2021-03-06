## HTML簡単概要

* 前後に改行が入らないものをインライン要素、入るものをブロック要素
* spanの使いどころ→文字色を変えたり線をひいたりする時に使用する

## css
カンマで区切れば、複数の要素に指定 (.main, div)

スペースで区切ると、特定の要素指定 (.wrapper p1 span)

### borderの種類
* solid: 実践
* dotted: 点線
* dashed: 破線
* double: 二重線

### width
display: inlineだと幅・高さの指定は出来ない

inline-blockやblockは指定できる

基本widthの初期値はauto(tableやflexは別)

要素の幅は親要素よりも大きくなることはない

→親が600pxなら子は600px以下になる

#### 100%とautoの違い
autoだとpaddingやborderが含まれる

100%だと含まれない
→border paddingを指定してると、その分だけ親要素からはみ出す可能性がある

box-sizing: border-boxプロパティを使用するとよい
https://saruwakakun.com/html-css/reference/box-sizing

inline-blockだとwidth:100%じゃないと横いっぱいに広がらない

inline要素にはそもそも幅指定できない

→指定したい場合はdisplayにblockかinline-blockを指定する

#### 一番上の親に幅が指定されていない場合
ブラウザの幅=bodyの幅になる

見る端末によって、またブラウザのウィンドウの大きさによって、bodyの幅が変わってくる

#### min-width/max-width
幅の最小値と最大値

レスポンシブwebデザインを作る際に必ず必要になる

https://saruwakakun.com/html-css/reference/max-min-width


### height
heightも基本初期値はauto

→要素の中身の分だけの高さになる

paddingが指定されれば、その分追加で高くなる

親要素にheightが指定されていないと%指定は効かない

→autoのままだとだめ！

#### 画面の半分の高さにしたいとき
htmlとbodyに対してheight: 100%, body直下の要素をheight: 50%にするとよい


## max-width/min-width
### min-widthの使いどころ
widthを%していしたときに, min-widthはセットで使うと便利。

例えばwidth: 50%のとき、ウェブで見る端末のサイズによって、要素が小さすぎたり大きすぎたりする。

そんなとき、min-widthを使えば「どんな端末・ブラウザで見てもこれよりは幅が小さくならない」という設定ができる。

→width:50%でもmin-widthより小さくならない。

### max-widthの使いどころ
* width: 80%のときスマホで見るとちょうどいい大きさなのに、PCで見るとでかすぎる！
→max-widhtが決まっていれば、画面の大きいPCで見ても**これ以上は幅が大きくならない**という設定ができる

* 画面（親要素）から画像がはみ出ないように制限したいときに使う
→幅320pxのスマホで見た時、幅500pxの画像は画面からはみ出てしまう。こういう画像に対して、max-width: 100%を指定しておくと、大きい画面で見たときには500px、小さい画面で見たときにも画面サイズより画像サイズが大きく表示させることがなくなる（つまりはみ出さなくなる）

* 縦横の比率がおかしくなったらheight: autoを指定する

### max-height/min-heightについて
widthとくらべるとあまり使う機会がないので、存在だけしっていればおｋ


### marginの相殺

要素1のmargin-bottomと、その後ろの要素2のmargin-topが並ぶと片方のmarginが無効になる

→適応されるmarginは値が大きい方になる

#### 親要素ともmarginの相殺は起きる
例えば親要素の上側のmarginが10px、親要素の中にある子要素の上側のmarginが40pxのとき、前の要素とのmarginには子要素からの40pxのmarginが適用される。

#### paddingの相殺はおきない
paddingとmarginの間でも相殺は起きない

### display: block
* text-alignとvertical-alignが適応できない
→margin: 0 auto;を使用する

### display: inline
* 基本的にはblock要素の中に使用される
* inline要素の中にblock要素を入れることはないので注意
* 幅と高さの指定ができない、inline要素にpaddingを設定すると上下がかぶってしまう可能性がある
* 上下の余白を調整できない(左右は可能)
* text-align/vertical-alignが指定できる


### display: inline-block
* 基本的に要素を横に並べたいときに使用する
→ソーシャルボタン・メニューバー（navbar）など横配置したい時などなど


### display: none
非表示、読み込み速度が早くなるわけではないので注意

→レスポンシブ対応のときに使う（パソコンでは表示するけど、小さい画面端末のときは非表示など）

## 文字装飾

### 文字のみやすさ

* line-height(行間)は1.5~2を指定すると見やすくなる
* letter-spacing(文字の間隔)は0.05~0.1emもしくは指定しない

### 取り消し線
`text-decoration: line-through`を指定する

### 文字に影をつける
`text-shadow: 影の右への長さ 影の下への長さ 影のぼけ具合 影の色`

文字が見にくくならないように、値は小さくする。また、影の色はgrayかsilverあたりにすると自然な影らしくなる

### position
基本的にtop, bottom, left, rightと一緒に使用する

* positionで基準を決める
* top bottom left rightで具体的な位置を数字で調整する

top/bottom/left/rightは基準からの距離で指定する

#### static

* 初期値がこれになっている
* 要素は通常の位置になり、上下左右に動かせない
* z-indexを指定できない

#### relative

現在の表示位置から相対的に要素の位置を動かしたいときに使用する

→z-indexやtopなどが指定できないときはrelativeにする

#### absolute

親要素を基準にした絶対位置

親要素はrelativeかfixedを指定しておく(標準位置がずれて思ったように表示されないときがある)


#### fixed

ウィンドウ全体が基準位置。



### overflow

要素のボックスからはみ出た部分をどう扱うか？を指定する

* visible 初期値。はみ出た部分がそのまま表示される場合あり
* hidden はみ出た部分が隠れる
* scroll はみ出た部分が隠れてスクロールできる状態に
* auto ブラウザにより表示がかわる（基本はスクロールと同じ状態）

#### 横スクロールさせる

`overflow: scroll`に加えて`white-space: nowrap`を指定する

#### 使わないスクロールバーを非表示にする

使う座標を指定する

ex) `overflow-x: scroll`だけを指定する or `overflow-y: hidden`も追加で指定する


### white-space

半角スペース・タブ・改行の表示方法を決める

* normal 半角スペースは一つにまとめられる・改行も同様 自動で折り返し
* nowrap 半角スペースは一つにまとめられる・改行も同様 折り返しされない
* pre-line 半角スペースやtabはまとまる・改行は反映される 自動で折り返し
* pre 入力したスペース関連は全て表示される 折り返されない
* pre-wrap 入力したスペース関// 隙間を作るかどうかのプロパティ連は全て表示される 自動で折り返し


### table

tr, th, tdで作成する。

borderは基本cssに記載すること。

`border-collapse`を要チェック。

レスポンシブデザインに対応するときはwidth: 100%を指定して対応する。


#### セルの結合

`rowspan`と`colspan`をチェック。rowspanは縦方向、colspanは横方向。


### google fontについて

サーバーを介してfontを使用するので端末に依存しない。多少はページ速度落ちる可能性があるが、最適化されているため使用数が多すぎなければ問題ない。

表示速度を優先したい場合は、日本語を通常フォント・アルファベットだけwebフォントを使用する。

### 疑似要素

`::after`と`::before`は要素の直前直後に入れる。

cssでhtml要素的なものを作成できる。

before/afterだとラベルを貼ったり、吹き出しの三角を作れたりやれることはさまざまある。

#### 使うメリット

* HTMLコードを汚すことなく様々な表現ができる
* SEOに依存しない（検索エンジンは疑似要素をコンテンツの中身としてみていないため）

#### コロンに関して

最新ブラウザではコロン２つでおｋ。多くのブラウザに対応するのであればコロン１つの方が良い。


#### content

文字を入れると疑似要素に応じて表示できる。画像も可能。

※ただし画像のサイズは変更不可（`width: 〇〇px`と書いても効かない）

### グラデーション
backgroundに対して指定する

* 線形（一方向）: linear-gradient(色)
* 円形: radial-gradient(色)

IE9以下は対応していない

#### ベンダープレフィックスはつけておく

`-moz-`や`-webkit-`

* background: -moz-linear-gradient();
* background: -webkit-linear-gradient();
* backgroudn: linear-gradient();

上記３つセットで書くと良い。

#### 基本的な書き方

* background: -moz-linear-gradient(開始位置, 開始色, 終了色);
* background: -webkit-linear-gradient(開始位置, 開始色, 終了色);
* backgroudn: linear-gradient(to 方向, 開始色, 終了色);

３色以上にする場合はカンマ区切りで書く

```
background: -moz-linear-gradient(to bottom,#FFF,#FFC778 30%,#F89174);
background: -webkit-linear-gradient(to bottom,#FFF,#FFC778 30%,#F89174);
background: linear-gradient(to bottom,#FFF,#FFC778 30%,#F89174);
```
％を加えて位置も指定できる

#### 斜めにグラデーションをかける

##### 開始位置を左上や右上にする

```
background: -moz-linear-gradient(top left, #FFF, #FFC778);
background: -webkit-linear-gradient(top left, #FFF, #FFC778);
background: linear-gradient(to bottom right, #FFF, #FFC778);
```

#### 円形グラデーション

```
background: -moz-radial-gradient(中央の色, 外側の色);
background: -webkit-radial-gradient(中央の色, 外側の色);
background: radial-gradient(中央の色, 外側の色);
```

linear-gradientとほとんど同じ

### box-shadow

```
〇〇 {
  box-shadow: 左右の向きpx 上下の向きpx ぼかしpx 広がりpx 色 内側指定;
}
```


### metaタグ

#### 検索避け

```
<meta name="robots" content="noindex,nofollow">
```
このページを掲載しないし、巡回もしないという意味。


##### 使いどころ

* 低品質なページ: noindex,nofollow
* 検索結果ページ: noindex,nofollow
* タグ/日付別ページ: noindex,follow
* トップページやカテゴリーページの２ページ目以降: noindex,follow


### linkタグ

* そのページと外部のファイルやページを関連付ける
* 基本的にheadタグ内に書く
* 基本的に訪問者の目には入らない
* ブラウザや検索エンジンに向けた情報や指示を書くためのタグ
* aタグとは役割が大きく違う。aタグはbodyタグ内でリンクを貼るために使われる

#### cssファイルを読み込む

```
<link rel="stylesheet" href="style.css">
```

rel: ファイルとの関係性を指定する
href: ファイルのURLを指定する


#### 検索エンジンにページの関係性を伝える

```
<link rel="canonical" href="https://saruwakakun.com">
```

seo的に重要なlinkタグ

canonical: このページの世紀のページはこれですよ,と伝える指定。

スラッシュ無しのものをhrefに設定しておくことでページ評価が分散されず、スラッシュありのページを読みに行ってもスラッシュなしのページを評価してくれるようになる。

#### 知っておきたいlinkタグの使い方

* スタイルシートの指定
* webサイトのアイコンを指定
* フィードページのURLがを示す
* 別URLのモバイルサイトの存在を知らせる
* 別URLの外国語ページの存在を知らせる
* 著者情報としてgoogleアカウントを指定する
* 前後のページのURL
* DNSプリフェッチ
* 正規URL(重要)


