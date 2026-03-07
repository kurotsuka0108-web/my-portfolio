# VANTAGE GYM ランディングページ

ジムのランディングページです。HTML、CSS、JavaScriptで構成された静的サイトです。

## 📁 ファイル構成

- `index.html` - メインのHTMLファイル
- `base.css` - ベーススタイル（変数、リセット、ヘッダー）
- `main.css` - メインスタイル（ヒーロー、料金プラン、フォーム、フッター）
- `script.js` - JavaScript（スクロール効果、フェードイン、スムーズスクロール）

## 🚀 使い方

### 1. ローカルで開く方法

#### 方法A: ブラウザで直接開く
```bash
# プロジェクトフォルダで
open index.html
```

#### 方法B: ローカルサーバーで開く（推奨）
```bash
# Python 3の場合
python3 -m http.server 8000

# Node.js (http-server) の場合
npx http-server -p 8000

# その後、ブラウザで http://localhost:8000 にアクセス
```

### 2. カスタマイズ方法

#### テキストの変更
- `index.html` を編集して、テキストや料金を変更できます

#### 色の変更
- `base.css` の `:root` セクションでカラーテーマを変更できます：
  ```css
  --bg-color: #0f0f0f;        /* 背景色 */
  --accent-gold: #D4AF37;     /* アクセントカラー（ゴールド） */
  ```

#### 背景画像の変更
- `index.html` の `<section class="hero">` に `style="background-image: url('画像のパス');"` を追加

#### ロゴの変更
- `index.html` の19行目付近：
  ```html
  <!-- 現在 -->
  <div class="logo">VANTAGE</div>
  
  <!-- 画像に変更する場合 -->
  <img src="ロゴ画像のパス" alt="VANTAGE" class="logo">
  ```

### 3. フォーム機能について

現在、フォームは表示のみで、送信機能は実装されていません。

**フォーム送信を実装する場合：**
- バックエンド（PHP、Node.js、Python等）が必要です
- または、フォーム送信サービス（Formspree、Netlify Forms等）を利用できます

#### Formspreeを使う例：
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- フォーム内容 -->
</form>
```

### 4. デプロイ方法

#### GitHub Pages
1. GitHubリポジトリにプッシュ
2. Settings > Pages で公開

#### Netlify
1. `netlify.toml` を作成（オプション）
2. ドラッグ&ドロップでデプロイ

#### Vercel
```bash
npm i -g vercel
vercel
```

## 🎨 主な機能

- ✅ レスポンシブデザイン（モバイル対応）
- ✅ スムーズスクロール
- ✅ スクロール時のフェードインアニメーション
- ✅ ヘッダーのスクロール変化
- ✅ 料金プランセクション
- ✅ 無料体験フォーム
- ✅ フッター（連絡先情報）

## 📝 注意事項

- フォーム送信機能は未実装です（バックエンドが必要）
- 背景画像は設定されていません（必要に応じて追加）
- モバイルメニューは実装されていますが、HTMLにメニューボタンが必要です

## 🔧 トラブルシューティング

**スタイルが適用されない場合：**
- CSSファイルのパスを確認してください
- ブラウザのキャッシュをクリアしてください

**アニメーションが動作しない場合：**
- JavaScriptファイルが正しく読み込まれているか確認してください
- ブラウザのコンソールでエラーを確認してください

