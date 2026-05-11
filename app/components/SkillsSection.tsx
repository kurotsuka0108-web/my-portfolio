"use client";

/**
 * SkillsSection - 技術スタックをフル幅で整理（ナビ #skills の着地先）
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Layers,
  Gauge,
  Box,
} from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "フロントエンド",
    desc: "コンポーネント設計、レスポンシブ、軽いアニメーションまで一貫して実装します。",
    tags: ["React", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: Layers,
    title: "公開・運用",
    desc: "ドメイン、デプロイ、計測、検索向けの土台づくり。",
    tags: ["Vercel", "Google Analytics 4", "Search Console", "環境変数 / SEO 基盤"],
  },
  {
    icon: Gauge,
    title: "バックエンド（学習・経験）",
    desc: "API の考え方やデータの流れを理解するため、小規模な実装経験があります。",
    tags: ["Node.js", "REST の理解", "PostgreSQL / MongoDB（学習）"],
  },
  {
    icon: Box,
    title: "その他",
    desc: "チーム開発を見据えた運用まわり。",
    tags: ["Git / GitHub", "ESLint", "レスポンシブ・アクセシビリティ意識"],
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
            案件や学習を通じて身につけた技術を、用途別に整理しています。
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
