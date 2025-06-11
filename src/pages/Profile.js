import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// 各セクションのコンポーネント
function ProfileHeader() {
  return (
    <header className="niconico-header">
      <h1>プロフィール</h1>
    </header>
  );
}

function ProfileAvatar() {
  return (
    <div className="profile-avatar-area">
      <img
        src="/assets/profile-icon.png"
        alt="三原優輝のアイコン"
        className="profile-avatar"
      />
      <div className="profile-name">三原優輝</div>
      <div className="profile-job">福岡工業大学 情報工学部情報工学科（2027年卒業見込み）</div>
      <div className="profile-links">
        <a href="https://github.com/NazonoKansatugata" target="_blank" rel="noopener noreferrer">
          <img src="/assets/github.svg" alt="GitHub" />
        </a>
      </div>
    </div>
  );
}

function ProfileIntro() {
  return (
    <section>
      <h2>自己紹介</h2>
      <p>
        福岡工業大学の情報系サークル「情報技術研究部」にて2024年に部長を務めました。<br />
        サークルの活動を活性化し、リーダーシップ・計画力・行動力を養いました。<br />
        ハッカソンやITイベントでの受賞経験も多数。<br />
        「プランナー視点を持ったプログラマー」として、幅広い分野で活躍できるエンジニアを目指しています。
      </p>
    </section>
  );
}

function ProfileEducation() {
  return (
    <section>
      <h2>学歴</h2>
      <ul className="profile-history">
        <li>福岡工業大学 情報工学部情報工学科（2027年卒業見込み）</li>
      </ul>
    </section>
  );
}

function ProfileInterests() {
  return (
    <section>
      <h2>志向性・興味</h2>
      <ul className="profile-history">
        <li>興味のある事業領域: Web系事業会社, SIer, ゲーム, エンタメ, メディア</li>
        <li>興味のある職種: フロントエンドエンジニア, バックエンドエンジニア,フルスタックエンジニア,スマホアプリエンジニア, ゲームエンジニア </li>
        <li>勤務地: こだわらない</li>
      </ul>
    </section>
  );
}

function ProfileExperience() {
  return (
    <section>
      <h2>経験・活動</h2>
      <ul className="profile-history">
        <li>趣味・実務でのプログラミング経験多数</li>
        <li>勉強会・イベント参加・主催経験あり</li>
        <li>WEBサービス・アプリ公開、ゲーム制作、GitHub活用、OSS貢献</li>
        <li>ビジネスコンテスト参加、学生団体代表経験あり</li>
        <li>英語: 日常会話レベル</li>
      </ul>
    </section>
  );
}

function ProfileGoal() {
  return (
    <section>
      <h2>キャリア目標</h2>
      <p>
        フルスタックエンジニアとしてキャリアを積みつつ、どんな状況にも幅広く対応していきたい。
      </p>
    </section>
  );
}

function ProfileSkills() {
  return (
    <section>
      <h2>スキル</h2>
      <ul className="profile-skills">
        <li>C#（Unityでゲーム制作）</li>
        <li>C++（迷路探索・パックマン等アルゴリズム制作）</li>
        <li>Java（Webアプリ制作、遊園地風サイト制作）</li>
        <li>Dart（Flutterで家具売買アプリ、AIメッセージアプリ）</li>
        <li>Python（pygamesで株価風ゲーム制作）</li>
        <li>Swift（バイトやイベントで学習・使用）</li>
        <li>C（学校の授業で学習）</li>
        <li>Docker（カレンダーアプリ開発で使用）</li>
        <li>TypeScript（Next.jsでLine messageAPIバックエンド開発）</li>
        <li>React, three.js, chart.js, Vite, Go, GCP, Gemini API, Firebase, Firestore, Google Maps API</li>
      </ul>
    </section>
  );
}

function ProfileIntern() {
  return (
    <section>
      <h2>インターン・開発アルバイト</h2>
      <ul className="profile-history">
        <li>株式会社SAKAZUKI（1週間以内）: web制作(react)・企画制作・プレゼンテーション</li>
      </ul>
    </section>
  );
}

function ProfileAwards() {
  return (
    <section>
      <h2>活動・受賞歴</h2>
      <ul className="profile-history">
        <li>技育ハッカソン、ハックツハッカソン（Progate賞受賞）、チャレキャラ、ゲームジャム等に参加・受賞</li>
        <li>dig-it-kitaq（学生が選ぶ最優秀賞受賞）</li>
      </ul>
    </section>
  );
}

function ProfilePR() {
  return (
    <section>
      <h2>自己PR</h2>
      <p>
        サークル活動の活性化やハッカソンでのリーダー経験を通じて、<br />
        チームを率いるリーダーシップ、イベント企画・実行力、技術への挑戦力を身につけました。<br />
        今後もフルスタックエンジニアとしての経験を積み、チームの力を最大限に引き出せるエンジニアを目指します。
      </p>
    </section>
  );
}

function ProfileLinks() {
  return (
    <section>
      <h2>関連リンク</h2>
      <ul className="profile-history">
        <li>
          <a href="https://github.com/NazonoKansatugata" target="_blank" rel="noopener noreferrer">
            GitHub: NazonoKansatugata
          </a>
        </li>
      </ul>
    </section>
  );
}

function Profile() {
  return (
    <div className="niconico-container">
      <nav className="niconico-nav">
        <ul>
          <li>
            <Link to="/">Homeに戻る</Link>
          </li>
        </ul>
      </nav>
      <ProfileHeader />
      <main className="niconico-main">
        <section className="profile-card">
          <ProfileAvatar />
          <div className="profile-detail">
            <ProfileIntro />
            <ProfileEducation />
            <ProfileInterests />
            <ProfileExperience />
            <ProfileGoal />
            <ProfileSkills />
            <ProfileIntern />
            <ProfileAwards />
            <ProfilePR />
            <ProfileLinks />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;
