import React, { useEffect, useRef } from 'react';
import './Danmaku.css';

const danmakuComments = {
  'Brakiocup2025': [
    "README爆発！",
    "惑星が進化してる！",
    "五角形グラフすごい！",
    "Progate賞おめでとう！",
    "評価が見やすい！",
    "UIがかっこいい！",
    "爆発演出最高！",
    "グラフの動きが滑らか！",
    "Gemini API使ってる！",
    "three.jsすごい！"
  ],
  'きたキタ九州': [
    "観光情報たっぷり！",
    "グルメ情報最高！",
    "最優秀賞おめでとう！",
    "Flutterで開発！",
    "Google Maps連携！",
    "UIが使いやすい！",
    "認証機能便利！",
    "学生が選ぶ最優秀賞！",
    "地図が見やすい！",
    "DB管理しっかり！"
  ],
  'ぷろふぃーるはぶ': [
    "オリキャラかわいい！",
    "トークが楽しい！",
    "LINE風UI！",
    "Gemini API活用！",
    "キャラ共有できる！",
    "DB連携すごい！",
    "キャラ制作簡単！",
    "会話が自然！",
    "Flutterで実装！",
    "UIにこだわり！"
  ],
  '作品D': [
    "Unity落ちものゲーム！",
    "ブロック積み上げ！",
    "物理挙動リアル！",
    "スコア更新！",
    "レベルアップ！",
    "C#で開発！",
    "連鎖が気持ちいい！",
    "操作性抜群！",
    "ゲーム性高い！",
    "Unity経験豊富！"
  ],
  '作品E': [
    "魔法少女ゲーム！",
    "魔法エフェクトきれい！",
    "敵を倒せ！",
    "ステージクリア！",
    "アニメーションすごい！",
    "Pygameで制作！",
    "ランキング機能搭載！",
    "魔法が多彩！",
    "キャラがかわいい！",
    "Pythonでゲーム！"
  ]
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Danmaku({ title }) {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    let intervalId;
    if (container) {
      intervalId = setInterval(() => {
        const comments = danmakuComments[title] || ["すごい！", "応援してます！"];
        const comment = document.createElement('div');
        comment.className = 'danmaku-comment';
        comment.textContent = comments[getRandomInt(comments.length)];
        comment.style.top = `${getRandomInt(200)}px`;
        container.appendChild(comment);

        setTimeout(() => {
          comment.style.transform = 'translateX(-100vw)';
        }, 100);

        setTimeout(() => {
          container.removeChild(comment);
        }, 6000);
      }, 1200);
    }
    return () => clearInterval(intervalId);
  }, [title]);

  return <div className="danmaku-container" ref={containerRef}></div>;
}

export default Danmaku;
