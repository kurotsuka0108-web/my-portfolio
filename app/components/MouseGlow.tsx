"use client";

/**
 * MouseGlow - マウスカーソルに追従する紫の光エフェクト
 *
 * 画面上でマウスを動かすと、カーソル位置に紫の光がついてくる。
 * クリックは透過するので、下のボタンやリンクはそのまま操作できる。
 */

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";


export default function MouseGlow() {
  // マウスが画面内にあるとき true。画面外に出たら光を消すために使う
  const [isVisible, setIsVisible] = useState(false);

  // 光の X/Y 座標。useSpring で滑らかに追従（数値が大きいほど素早くついてくる）
  const mouseX = useSpring(0, { stiffness: 2000, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 2000, damping: 100 });

  useEffect(() => {
    // マウスが動いたとき：光を表示し、現在のカーソル座標をセット
    const handleMove = (e: MouseEvent) => {
      setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // マウスが画面外に出たとき：光を非表示にする
    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.body.addEventListener("mouseleave", handleLeave);

    // コンポーネントが消えるときにイベントを解除（メモリリーク防止）
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseleave", handleLeave);
    };
  }, [mouseX, mouseY]);

  return (
    // 外側：画面全体を覆うレイヤー。クリックは透過（pointer-events-none）
    <motion.div
      className="pointer-events-none fixed inset-0 z-[100]"
      initial={false}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* 光そのもの：mouseX / mouseY の位置に表示。中央揃えで丸い紫のぼかし */}
      <motion.div
        className="mouse-glow absolute h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/60 blur-[24px]"
        style={{
          left: mouseX,
          top: mouseY,
        }}
      />
    </motion.div>
  );
}
