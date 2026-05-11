"use client";

/**
 * SkillsSection - 作品で使用した技術の整理（ナビ #skills の着地先）
 * このポートフォリオ、kura eyelash、VANTAGE GYM で実際に使ったスタックに限定
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, LayoutTemplate, Rocket, Plug } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "フロントエンド（Next.js 系）",
    desc:
      "このポートフォリオサイトおよび kura eyelash の公式サイトで使用。コンポーネント設計・レスポンシブ・アニメーションまで対応。",
    tags: [
      "Next.js（App Router）",
      "React",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Lucide React",
    ],
  },
  {
    icon: LayoutTemplate,
    title: "静的 LP（VANTAGE GYM）",
    desc: "ジム向けランディングページ（public/gym）で使用。マークアップとスタイル、インタラクションを素の JS で実装。",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: Rocket,
    title: "公開・SEO・計測",
    desc:
      "本番デプロイと、検索・シェア・分析のための設定。kura eyelash とこのサイトで利用した範囲に合わせています。",
    tags: [
      "Vercel",
      "メタデータ・OGP",
      "Google Analytics 4",
      "Vercel Analytics",
      "Google Search Console",
      "sitemap / robots.txt",
    ],
  },
  {
    icon: Plug,
    title: "連携・開発環境",
    desc: "問い合わせ送信やリポジトリ運用など、作品制作で使った周辺ツール。",
    tags: ["EmailJS", "環境変数（.env）", "Git / GitHub"],
  },
];

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="skills"
      className="py-20 md:py-32 px-6 bg-slate-950"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-xs tracking-[0.25em] text-indigo-400 uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-50 mb-4">
            スキル & スタック
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            掲載している制作物で実際に使用した技術だけをまとめています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.08 * i }}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 backdrop-blur-sm hover:border-indigo-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-50">
                    {group.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {group.desc}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <li
                      key={tag}
                      className="px-3 py-1.5 text-xs rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
