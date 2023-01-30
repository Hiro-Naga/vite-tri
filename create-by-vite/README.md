## vite/webpack 比較用プロジェクト①
移行から行うのではなく、viteのコマンドでプロジェクトを作成したもの<br>
中身そのままなのでコード上の差が多少はあるかもしれない

### 環境構築
```sh
npm init vite@latest create-by-vite -- --template react-ts
```

### 良い点
- 起動が凄まじく早い
  `npm run dev`にて計測
  > VITE v4.0.2  ready in 541 ms<br>
  何度か実行しているが300ms台が多い<br>
  `time npm run build`にて計測<br>
  > npm run build  3.88s user 0.33s system 142% cpu 2.949 total<br>
  少なくとも体感で感じられる程度には早い
- コマンド一つである程度の環境ができる<br>
  上記。webpackであれば(Angular等内蔵であればともかく)他にコマンドが必要になりうる

### 問題点・不明点
- `npm run dev`は通るものの`npm run build`が通らない
  - eslint系が入っていないらしいことでエラーが発生<br>
    `npm install @types/node --save-dev`により一つはエラーが消えたが残り4つエラーがある<br>(eslint, eslint-scope, estree, json-schema)<br>
    →後日実行したところ問題なく動作した
  - 一度エラーを吐いた後でもdevは通るので後述の複数configのせい？
- `vite preview`が動かない<br>
  何かもわからんのでとりあえず放置<br>
  →上記npm run build完了後は無事動作した
- 自動生成でtsconfigができているが、`tsconfig.node.json`が同時に生成される点<br>
  一見不明、エラーも出ている<br>
  ブラウザ用とローカルPC内Node.js用の設定らしい？
- ts環境をcreate-react-appで作成した場合dependenciesにwebpackがいる
