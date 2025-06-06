import React, { useEffect, useRef, useState } from 'react';
import './Danmaku.css';
import { db } from '../firebase';
import {
  collection, doc, addDoc, query, orderBy, onSnapshot, serverTimestamp
} from "firebase/firestore";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Danmaku({ title }) {
  const containerRef = useRef();
  const [comments, setComments] = useState(["すごい！", "応援してます！"]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    // Firestoreからサブコレクションの弾幕コメントをリアルタイム取得
    const commentsRef = collection(db, "danmakuComments", title, "comments");
    const q = query(commentsRef, orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetched = snapshot.docs.map(doc => doc.data().text);
      setComments(fetched.length > 0 ? fetched : ["すごい！", "応援してます！"]);
    });
    return () => unsubscribe();
  }, [title]);

  useEffect(() => {
    const container = containerRef.current;
    let intervalId;
    if (container) {
      intervalId = setInterval(() => {
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
  }, [comments]);

  // コメント投稿処理
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setSending(true);
    const commentText = input.trim();
    try {
      const commentsRef = collection(db, "danmakuComments", title, "comments");
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
    <div>
      <div className="danmaku-container" ref={containerRef}></div>
      <form className="danmaku-form" onSubmit={handleSubmit} style={{marginTop: 8, display: 'flex', gap: 4}}>
        <input
          type="text"
          value={input}
          maxLength={40}
          onChange={e => setInput(e.target.value)}
          placeholder="コメントを入力..."
          disabled={sending}
          style={{flex: 1}}
        />
        <button type="submit" disabled={sending || !input.trim()}>投稿</button>
      </form>
    </div>
  );
}

export default Danmaku;
