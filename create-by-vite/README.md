## vite/webpack 比較用
移行から行うのではなく、viteのコマンドでプロジェクトを作成したもの

### 環境構築
```sh
npm init vite@latest create-by-vite -- --template react-ts
```

### 良い点
- 起動が凄まじく早い
  `npm run dev`にて計測
  > VITE v4.0.2  ready in 541 ms
- コマンド一つである程度の環境ができる
  上記。webpackであれば(Angular等内蔵であればともかく)他にコマンドが必要になりうる

### 問題点・不明点
- `npm run dev`は通るものの`npm run build`が通らない
  - eslint系が入っていないらしいことでエラーが発生
    `npm install @types/node --save-dev`により一つはエラーが消えたが残り4つエラーがある(eslint, eslint-scope, estree, json-schema)
    →後日実行したところ問題なく動作した
  - 一度エラーを吐いた後でもdevは通るので後述の複数configのせい？
- `vite preview`が動かない
  何かもわからんのでとりあえず放置
  →上記npm run build完了後は無事動作した
- 自動生成でtsconfigができているが、`tsconfig.node.json`が同時に生成される点
  一見不明、エラーも出ている
  ブラウザ用とローカルPC内Node.js用の設定らしい？
- ts環境をcreate-react-appで作成した場合dependenciesにwebpackがいる
