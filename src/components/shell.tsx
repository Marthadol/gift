import { GiftIcon } from "./icons";

export function Shell({ children, sender = "Evan Kate" }: { children: React.ReactNode; sender?: string }) {
  return <div className="site-shell">
    <header className="site-header"><a className="wordmark" href="/" aria-label="Gift announcement home"><span className="brand-icon"><GiftIcon /></span>A little something<span className="wordmark-dot">.</span></a><span className="announcement-label">A special delivery</span></header>
    <main id="main-content">{children}</main>
    <footer className="site-footer"><span>Thoughtfully given. Happily received.</span><span>From {sender}, with care <span aria-hidden="true">♡</span></span></footer>
  </div>;
}
