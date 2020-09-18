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

### max-widhtの使いどころ
* width: 80%のときスマホで見るとちょうどいい大きさなのに、PCで見るとでかすぎる！
→max-widhtが決まっていれば、画面の大きいPCで見ても**これ以上は幅が大きくならない**という設定ができる

* 画面（親要素）から画像がはみ出ないように制限したいときに使う
→幅320pxのスマホで見た時、幅500pxの画像は画面からはみ出てしまう。こういう画像に対して、max-width: 100%を指定しておくと、大きい画面で見たときには500px、小さい画面で見たときにも画面サイズより画像サイズが大きく表示させることがなくなる（つまりはみ出さなくなる）

### max-height/min-heightについて
widthとくらべるとあまり使う機会がないので、存在だけしっていればおｋ
