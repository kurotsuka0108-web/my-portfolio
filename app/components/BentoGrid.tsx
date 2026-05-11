"use client";

/**
 * BentoGrid - 「主な作品」セクション（ベントボックス風レイアウト）
 *
 * ・メインプロジェクト（kura eyelash / VANTAGE GYM 等）、実績、連絡先、スキル誘導、趣味をカードで表示
 * ・スキルの詳細は SkillsSection（#skills）へ誘導
 * ・画面に入ったらカードが順番にスライドイン（Stagger アニメーション）
 */

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Dumbbell,
  Flame,
  Waves,
  Film,
  Wind,
  Sparkles,
} from "lucide-react";

export default function BentoGrid() {
  // セクション要素への参照
  const sectionRef = useRef<HTMLElement>(null);
  // セクションがビューポートに入ったかどうかを検出（一度だけ実行、100px手前で検出）
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // 親要素：子カードを0.1秒ずつずらして表示（Stagger効果）
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // 各カード：下から30pxスライド＋フェードイン
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // 作品データ（外部は新規タブ。ローカル静的ページは同一タブ）
  const additionalProjects = [
    {
      title: "kura eyelash",
      description:
        "名古屋・栄のプライベートまつ毛サロン公式サイト。6ページ構成、独自ドメイン、Search Console / GA4 連携。",
      tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
      image: "bg-gradient-to-br from-rose-800/90 to-amber-900/90",
      screenshot: "/works/kura-eyelash-desktop.png",
      icon: Sparkles,
      href: "https://kura-eyelash.com",
      external: true,
    },
    {
      title: "VANTAGE GYM",
      description: "ジムのランディングページ。レスポンシブデザインとスムーズなアニメーションを実装",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      icon: Dumbbell,
      href: "/gym/index.html",
      external: false,
    },
  ];
  const stats = [
    { number: "Logic First", label: "仕組みから考える" },
    { number: "Craft with Care", label: "丁寧なモノづくり" },
    { number: "Never Stop", label: "学び続ける姿勢" },
  ];

  // SNSリンクデータ
  const socialLinks = [
    { icon: Github, href: "https://github.com/kurotsuka0108-web", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/tsukasa-shimozono-32891b3b1/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:kurotsuka0108@gmail.com", label: "Email" },
  ];

  // 趣味データ
  const hobbies = [
    { icon: Dumbbell, text: "筋トレ" },
    { icon: Flame, text: "サウナ" },
    { icon: Waves, text: "温泉" },
    { icon: Film, text: "映画鑑賞" },
    { icon: Wind, text: "サーフィン" },
  ];

  return (
    <section
      ref={sectionRef}
      id="works"
      className="py-32 px-6 bg-slate-950"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-slate-50 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          主な作品
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* VANTAGE GYM カード（2列2行・先頭に表示） */}
          {additionalProjects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.a
                key={project.title}
                href={project.href}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
                className="md:col-span-2 md:row-span-2 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 overflow-hidden group cursor-pointer block"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {"screenshot" in project && project.screenshot ? (
                  <div className="relative h-48 rounded-2xl mb-6 overflow-hidden border border-slate-700/50 bg-slate-950">
                    <Image
                      src={project.screenshot}
                      alt={`${project.title} のスクリーンショット`}
                      fill
                      sizes="(max-width: 768px) 100vw, 560px"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className={`${project.image} h-48 rounded-2xl mb-6 flex items-center justify-center`}>
                    <Icon className="w-16 h-16 text-white opacity-80" />
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-50 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}

          {/* 実績カード（大切にしている価値観） */}
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center group cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-indigo-500 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}

          {/* 連絡先カード（GitHub, Twitter 等へのリンク） */}
          <motion.div
            className="md:col-span-2 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-slate-50 mb-4">
              連絡先
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="flex flex-col items-center justify-center p-4 bg-slate-800/50 hover:bg-indigo-500/20 border border-slate-700 hover:border-indigo-500/50 rounded-2xl transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-indigo-400 mb-2 transition-colors" />
                    <span className="text-xs text-slate-400 group-hover:text-slate-300">
                      {social.label}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="md:row-span-2 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 flex flex-col justify-center"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-slate-50 mb-3">
              スキル詳細
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              フロントエンド実装を中心に、公開・計測・SEO まで。カテゴリ別の技術スタックは専用セクションでまとめています。
            </p>
            <Link
              href="#skills"
              className="inline-flex items-center justify-center rounded-2xl bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 px-4 py-3 text-sm font-medium hover:bg-indigo-500/25 transition-colors text-center"
            >
              スキル &amp; スタックを見る
            </Link>
          </motion.div>

          {/* 趣味カード（筋トレ・サウナ等） */}
          <motion.div
            className="md:col-span-2 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-slate-50 mb-4">
              コード以外のこと
            </h3>
            <div className="flex flex-wrap gap-4">
              {hobbies.map((hobby, index) => {
                const Icon = hobby.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-2xl group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-5 h-5 text-indigo-400" />
                    <span className="text-slate-300 text-sm">{hobby.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
