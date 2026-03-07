"use client";

/**
 * Contact - お問い合わせフォームセクション
 *
 * ・お名前・メール・メッセージの入力フォーム
 * ・送信時はアラート表示＋フォームリセット（※実際の送信処理は未実装）
 */

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // フォームの入力データを管理するstate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // フォーム送信時の処理: デフォルトの送信動作を防ぎ、アラートを表示してフォームをリセット
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("お問い合わせありがとうございます！後日ご連絡いたします。");
    setFormData({ name: "", email: "", message: "" });
  };

  // 入力フィールドの値が変更されたときに呼ばれる関数: フォームデータを更新
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-32 px-6 bg-slate-950"
    >
      <div className="container mx-auto max-w-4xl">
        {/* 見出しと説明文 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-slate-50 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            お問い合わせ
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            プロジェクトのご相談がございましたら、お気軽にお問い合わせください。
            <br />
            あなたのアイデアを実現する方法を一緒に考えましょう。
          </motion.p>
        </motion.div>

        {/* お問い合わせフォーム（glass クラスでガラス風スタイル） */}
        <motion.form
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-8 md:p-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl text-slate-50 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="お名前を入力してください"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl text-slate-50 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                メッセージ
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl text-slate-50 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                placeholder="プロジェクトの詳細をお聞かせください..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-3xl text-base transition-all duration-300 font-medium flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              送信する
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
