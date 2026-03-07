"use client";

/**
 * Hero - 自己紹介のファーストビューセクション
 *
 * ・左：名前・プロフィール・自己紹介文・CTAボタン
 * ・右：プロフィール写真（またはイラスト）＋紫グローのデコレーション
 * ・スクロールで画面に入ったタイミングでアニメーション発火
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Hero() {
  // セクション要素への参照
  const sectionRef = useRef<HTMLElement>(null);
  // セクションがビューポートに入ったかどうかを検出（一度だけ実行、100px手前で検出）
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 bg-slate-950"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ── 左側：自己紹介 ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* 名前 */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-50 mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              下園{" "}
              <span className="text-indigo-500">司</span>
            </motion.h1>

            {/* 肩書き・所在地 */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-sm tracking-[0.15em] text-slate-500 uppercase">
                Tsukasa Shimozono
              </span>
              <span className="text-slate-700">|</span>
              <span className="flex items-center gap-1 text-sm text-slate-500">
                <MapPin className="w-3.5 h-3.5" />
                愛知県在住・25歳
              </span>
            </motion.div>

            {/* 自己紹介文 */}
            <motion.p
              className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Webサービスの検索・決済・問い合わせといった「仕組み」に魅了され、エンジニアの道へ。裏側のロジックを解明すること、そしてアニメーションに命が吹き込まれた瞬間のワクワクを原動力に、丁寧なモノづくりを追求し、日々学習してスキルアップを図っています。
            </motion.p>

            {/* CTAボタン */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-3xl text-base transition-all duration-300 font-medium"
              >
                お問い合わせ
              </a>
              <a
                href="#works"
                className="px-8 py-3 border border-slate-700 hover:border-indigo-500 text-slate-50 rounded-3xl text-base transition-all duration-300 font-medium"
              >
                作品を見る
              </a>
            </motion.div>
          </motion.div>

          {/* ── 右側：プロフィール写真＋デコレーション ── */}
          <motion.div
            className="relative flex justify-center items-center min-h-[320px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* 背景のグローオーブ */}
            <motion.div
              className="absolute w-72 h-72 rounded-full bg-purple-500/20 blur-3xl glow"
              animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-44 h-44 rounded-full bg-purple-500/15 blur-2xl glow -right-4 top-1/3"
              animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* 回転リング */}
            <motion.div
              className="absolute w-80 h-80 rounded-full border border-slate-700/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-64 h-64 rounded-full border border-purple-500/20 glow"
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />

            {/* 写真エリア（丸くクリッピング） */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-slate-700/50 z-10">
              <Image
                src="/profile.png"
                alt="下園 司のプロフィール写真"
                fill
                className="object-cover object-[15%_20%]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
