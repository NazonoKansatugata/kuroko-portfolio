import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Danmaku from '../components/Danmaku';
import works from '../works';
import './Home.css';

function Home() {
  const initialWork = works.find(w => w.title === 'Brakiocup2025') || works[0];
  const [selected, setSelected] = useState(initialWork);

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
        <section className="niconico-work-detail">
          <h2>{selected.title}</h2>
          <p>{selected.description}</p>
          <p>
            <a href={selected.url} target="_blank" rel="noopener noreferrer">
              GitHub/詳細を見る
            </a>
          </p>
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
