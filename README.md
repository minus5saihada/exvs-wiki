# exvs-wiki

機動戦士ガンダム EXVSシリーズ（マキシブーストON／EXVS2インフィニットブースト）のwikiサイト。

## 構成

- メイン: Next.js + Payload CMS（DB: Postgres）
- リアルタイム: PocketBase（アクセスカウンター）
- 分析: Umami
- インフラ: Docker Compose

詳細は [claude/exvs-wiki-design.md](./claude/exvs-wiki-design.md) を参照。

## 前提

- Node.js（`engines`参照）
- pnpm
- Docker / Docker Compose

## ローカル起動

1. `.env.example`を`.env`にコピーし、シークレット類（`PAYLOAD_SECRET`, `PB_ENCRYPTION_KEY`, `UMAMI_APP_SECRET`）を生成した値に置き換える
2. `docker compose up -d` で Postgres / PocketBase / Umami / Next.jsアプリを起動
3. `http://localhost:3000/admin` にアクセスし、初回管理ユーザーを作成
4. Umamiは `http://localhost:3001`、PocketBase管理画面は `http://localhost:8090/_/` でアクセス可能

アプリのコードを変更しながら開発する場合は `web` サービスを止めて `pnpm install && pnpm dev` をホスト側で直接実行することもできる（`.env`の`DATABASE_URL`は`localhost`向けのままでよい）。
