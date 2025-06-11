import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Danmaku from '../components/Danmaku';
import works from '../works';
import './Home.css';
import { db } from '../firebase';
import {
  collection, doc, addDoc, serverTimestamp
} from "firebase/firestore";

function Home() {
  const initialWork = works.find(w => w.title === 'Brakiocup2025') || works[0];
  const [selected, setSelected] = useState(initialWork);

  // コメント投稿フォーム用の状態
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  // コメント投稿処理
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setSending(true);
    const commentText = input.trim();
    try {
      const commentsRef = collection(db, "danmakuComments", selected.title, "comments");
      await addDoc(commentsRef, {
        text: commentText,
        createdAt: serverTimestamp()
      });
      setInput("");
    } catch (e) {
      // エラー処理（必要に応じて）
    }
    setSending(false);
  };

  return (
    <div className="niconico-container">
      <nav className="niconico-nav">
        <ul>
          <li>
            <Link to="/profile">プロフィール</Link>
          </li>
        </ul>
      </nav>
      <header className="niconico-header">
        <h1>黒子のポートフォリオ(仮)</h1>
      </header>
      <main className="niconico-main">
        <div className="niconico-video-area">
          <img
            src={selected.thumbnail}
            alt={selected.title + ' Thumbnail'}
            className="niconico-thumbnail"
          />
          <Danmaku title={selected.title} />
        </div>
        {/* コメント投稿フォームをここに追加 */}
        <form
          className="danmaku-form"
          onSubmit={handleSubmit}
          style={{ margin: '12px 0', display: 'flex', gap: 4, maxWidth: 480 }}
        >
          <input
            type="text"
            value={input}
            maxLength={40}
            onChange={e => setInput(e.target.value)}
            placeholder="コメントを入力..."
            disabled={sending}
            style={{ flex: 1 }}
          />
          <button type="submit" disabled={sending || !input.trim()}>投稿</button>
        </form>
        <section className="niconico-work-detail">
          <h2>{selected.title}</h2>
          <p>{selected.description}</p>
          <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', margin: '8px 0'}}>
            {selected.github && selected.github !== '#' && selected.github !== '' && (
              <a href={selected.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {selected.youtube && selected.youtube !== '#' && selected.youtube !== '' && (
              <a href={selected.youtube} target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            )}
            {selected.site && selected.site !== '#' && selected.site !== '' && (
              <a href={selected.site} target="_blank" rel="noopener noreferrer">
                紹介サイト
              </a>
            )}
          </div>
        </section>
        <section className="niconico-works">
          <h2>動画リスト</h2>
          <div className="niconico-video-list">
            {works.map((work, idx) => (
              <div className="niconico-video-card" key={idx}>
                <div className="niconico-video-thumb-wrap">
                  <img src={work.thumbnail} alt={work.title} className="niconico-video-thumb" />
                  <button
                    className="niconico-play-btn"
                    onClick={() => setSelected(work)}
                  >
                    ▶
                  </button>
                </div>
                <div className="niconico-video-info">
                  <div className="niconico-video-title">{work.title}</div>
                  <div className="niconico-video-desc">{work.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
