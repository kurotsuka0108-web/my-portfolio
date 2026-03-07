"use client";

/**
 * Header - サイト上部の固定ナビゲーションバー
 *
 * ・スクロールすると背景が表示される
 * ・PC：横並びメニュー / スマホ：ハンバーガーメニュー
 * ・各セクション（Home, Works, Skills, Contact）へのリンク
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  // スクロール状態を管理するstate
  const [isScrolled, setIsScrolled] = useState(false);
  // モバイルメニューの開閉状態を管理するstate
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // スクロールイベントを監視し、スクロール位置に応じてヘッダーのスタイルを変更
  useEffect(() => {
    const handleScroll = () => {
      // スクロール位置が20pxを超えたら背景を表示
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ナビゲーションメニューの項目（#〜 でページ内のセクションにスクロール）
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Works", href: "#works" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="#home"
            className="text-lg font-semibold text-slate-50 hover:text-indigo-400 transition-colors"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          {/* 768px以上（iPad mini以上）で表示されるデスクトップナビゲーション */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-slate-400 hover:text-slate-50 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          {/* モバイルメニューの開閉ボタン: クリックでメニューの表示/非表示を切り替える */}
          {/* 768px未満（iPad mini未満）で表示されるハンバーガーメニューボタン */}
          <button
            className="md:hidden p-2 text-slate-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {/* モバイルメニューが開いたときに表示されるナビゲーション */}
        {/* 768px未満（iPad mini未満）で表示されるモバイルメニュー */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-slate-950/80 backdrop-blur-xl rounded-3xl p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-400 hover:text-slate-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)} // リンククリック時にモバイルメニューを閉じる
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
