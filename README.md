vite / webpack 比較用リポジトリ

- create-by-react

  create-app-reactで作成したreactプロジェクト<br>
  ts指定のため依存関係にwebpack内蔵

- create-by-vite

  viteのコマンドで作成したreactプロジェクト<br>
  新規プロジェクト作成時予めviteを入れる時はこちら
  ```sh
  npm init vite@latest create-by-vite -- --template react-ts
  ```
- vite-tri

  reactプロジェクトにwebpackを導入し、viteに移行するシミュレーションプロジェクト<br>
  1. 素のreactプロジェクトを作成
  2. webpackの環境構築を行う
  3. viteの環境構築を行う
  4. webpackとviteの実行時間を比較する
