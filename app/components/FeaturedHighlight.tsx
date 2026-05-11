"use client";

/**
 * FeaturedHighlight - 制作実績（kura eyelash の紹介）
 * kura eyelash を前面に表示し、外部サイトへリンク
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedHighlight() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="featured"
      className="py-20 md:py-28 px-6 bg-slate-950 border-y border-slate-800/80"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-xs tracking-[0.25em] text-indigo-400 uppercase mb-3">
            Case Study
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-50 mb-4">
            制作実績
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            実運用中のコーポレートサイト。デザインシステム・レスポンシブ・SEO・計測まで一貫して対応しました。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="rounded-3xl border border-slate-700/80 bg-gradient-to-br from-rose-950/50 via-slate-900/90 to-amber-950/30 p-8 md:p-10 shadow-[0_0_0_1px_rgba(99,102,241,0.08)]"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-rose-300/90 text-sm font-medium mb-3">
                <Sparkles className="w-4 h-4" />
                プライベートサロン公式サイト
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-50 mb-3">
                kura eyelash
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                名古屋・栄エリアのまつ毛サロン向けに、Next.js で6ページ構成のサイトを構築。
                ブランドカラー・タイポグラフィ・アニメーション、Search Console / GA4 / 独自ドメインまでをセットで実装。
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 16",
                  "TypeScript",
                  "Tailwind CSS v4",
                  "Framer Motion",
                  "Vercel",
                  "GA4",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-slate-800/80 text-indigo-300 border border-slate-600/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-stretch md:items-end gap-3 shrink-0">
              <a
                href="https://kura-eyelash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 px-5 py-3 text-sm font-medium hover:bg-indigo-500/25 transition-colors"
              >
                サイトを見る
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="#works"
                className="text-center md:text-right text-xs text-slate-500 hover:text-slate-300 transition-colors underline-offset-4 underline"
              >
                メインの作品一覧へ
              </Link>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-slate-700/50">
            <figure className="m-0">
              <figcaption className="text-xs text-slate-500 mb-3 tracking-wider">
                デスクトップ（トップ）
              </figcaption>
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-600/40 shadow-lg shadow-black/30 bg-slate-900">
                <Image
                  src="/works/kura-eyelash-desktop.png"
                  alt="kura eyelash 公式サイトのトップページ（デスクトップ表示）"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </figure>
            <figure className="m-0 flex flex-col items-center lg:items-stretch">
              <figcaption className="text-xs text-slate-500 mb-3 tracking-wider w-full text-center lg:text-left">
                モバイル（トップ）
              </figcaption>
              <div className="relative w-full max-w-[260px] mx-auto lg:mx-0 aspect-[9/16] max-h-[420px] rounded-[2rem] overflow-hidden border border-slate-600/40 shadow-lg shadow-black/30 bg-slate-900">
                <Image
                  src="/works/kura-eyelash-mobile.png"
                  alt="kura eyelash 公式サイトのトップページ（スマートフォン表示）"
                  fill
                  sizes="260px"
                  className="object-cover object-top"
                />
              </div>
            </figure>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
