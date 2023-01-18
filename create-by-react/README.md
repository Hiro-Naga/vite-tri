## webpack と viteの比較用プロジェクト②
reactにwebpackを入れたものを作成し、その後viteに移行する
create-react-appで作ったものであり、内蔵のものの場合の時間計測用に作成
- react
- typescript
- webpack
- vite

### 環境構築
- create react/ts project
```sh
npx create-react-app create-by-react --template typescript
```

- install webpack(※ built-in)
```sh
npm install --save-dev webpack
```

### 実行時間計測
`time npm run build`で実行
> npm run build  11.40s user 1.44s system 143% cpu 8.938 total

