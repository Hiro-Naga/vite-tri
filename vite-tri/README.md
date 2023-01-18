## webpack と viteの比較用プロジェクト③
reactにwebpackを入れたものを作成し、その後viteに移行する
ブラックボックスを作らないよう作成するためcreate-react-appを使わず、1からreact・webpack・viteを入れていく

### 環境
- react
- typescript
- webpack
- vite (webpackから移行する)

### 環境構築
#### 各moduleのインストール
- TypeScript
```sh
npm install --save-dev typescript
```
- React関係
```sh
npm install --save react react-dom
npm install --save-dev @types/react @types/react-dom
```
- webpack関連
```sh
npm install --save-dev webpack webpack-cli ts-loader style-loader css-loader html-webpack-plugin webpack-dev-server
```
※ webpack-dev-serverはローカルwebで実行確認するためのクライアントサーバー、cssがそのままだと利用できないのでcss系のstyle、cssの2種のloaderもインストール

- vite関連
```sh
npm install --save-dev vite @vitejs/plugin-react
```
※ webpack同様、ts+cssを使えるように構成する

#### 構成
package.json: node構成を記述<br>
tsconfig.json: tsの設定を記述<br>
webpack.config.js: webpack設定を記述<br>
vite<br>
src以下をdistに出力

### ビルド時間計測


### 雑感
- フレームワークの便利さ
  1からwebpackの設定を指定する段階で項目数が多すぎてめんどかった
- 謎エラー一覧
  1. tsconfig
    > 構成ファイル '/Users/nagasawa/Desktop/自作/vite-tri/vite-tri/tsconfig.json' で入力が見つかりませんでした。指定された 'include' パスは '["src"]' で、'exclude' パスは '["node_modules","**/*.spec.ts"]' でした

    tsconfig.jsonで一生出ているエラー<br>
    [このサイト](https://insider.10bace.com/2017/11/29/typescript-ts18003-error/)によると放置でいいらしい。<br>
    実際、一度buildすると消える

  2. package.json
    > ReferenceError: require is not defined in ES module scope, you can use import instead
  This file is being treated as an ES module because it has a '.js' file extension and '/Users/nagasawa/Desktop/自作/vite-tri/vite-tri/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension

    `"type": "module"`の指定をpackage.jsonに記述していた際に出たエラー。`commonjs`にすれば通ると思われる。
    create-react-appで作ったreactアプリを確認したところtype指定がなかったため記述を削除し対応。
    viteで作成した方はmoduleで指定が入っていたため、行けるかと思い釣られた。

  3. tsconfig > noEmit
    > TypeScript emitted no output for /Users/nagasawa/Desktop/自作/vite-tri/vite-tri/src/index.tsx.
    webpackでbuildした時に発生。ts-loaderの問題らしい？
    tsconfigから削除することで解消できる。
    create-react-app、create-by-vite共に`noEmit: true`の指定があったため、何か差があると思われる。

  4. 画像のインポート
    相対/絶対パスでなぜか読み込めない。import文も`<img src="xxxx">`等もダメである<br>
    おそらくlocalhost:8080側のディレクトリを見に行ってるのだと思うが、tsconfigに記述したrootの再指定(baseUrl、paths)あたりが効いていないような気がする。
