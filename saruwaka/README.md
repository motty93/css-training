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
autoだとpaddingやbotderが含まれる

100%だと含まれない
→border paddingを指定してると、その分だけ親要素からはみ出す可能性がある
    box-sizing: border-boxプロパティをしようするとよい
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

※ただし画像のサイズは変更不可（`width: oopx`と書いても効かない）

