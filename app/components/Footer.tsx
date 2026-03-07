/**
 * Footer - サイト最下部のフッター
 *
 * ・著作権表記（年は自動で更新）
 * ・ホーム・作品・お問い合わせへのリンク
 */

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* PC：横並び / スマホ：縦並び */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-sm">
            &copy; {currentYear} Portfolio. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link
              href="#home"
              className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
            >
              ホーム
            </Link>
            <Link
              href="#works"
              className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
            >
              作品
            </Link>
            <Link
              href="#contact"
              className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
