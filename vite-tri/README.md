## webpack と viteの比較用プロジェクト②
reactにwebpackを入れたものを作成し、その後viteに移行する
- react
- typescript
- webpack
- vite

### 環境構築
- create react/ts project
```sh
npx create-react-app vite-tri --template typescript
```

- install webpack(built-in)
```sh
npm install --save-dev webpack
```

### 実行時間計測
- 移行前
  `time npm run build`で実行
  > npm run build  11.40s user 1.44s system 143% cpu 8.938 total
- 移行後
  ※ 実際に移行した後に追記
