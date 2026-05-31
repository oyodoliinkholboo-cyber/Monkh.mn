export default function Header(){
  return (
    <header id="hd">
      <div className="wrap nav-inner">
        <a className="brand" href="#hero">
          <img  src="/assets/logo.png" alt="MONH лого" />
          <div><b>Монголын Оёдлын<br />Нэгдсэн Холбоо</b><span>MONH</span></div>
        </a>
        <nav className="links">
          <a href="#years">Түүх</a><a href="#mission">Эрхэм зорилго</a>
          <a href="#projects">Төслүүд</a><a href="#uniform">Дүрэмт хувцас</a>
          <a href="#members">Гишүүд</a><a href="#world">Хамтын ажиллагаа</a><a href="#future">Ирээдүй</a>
        </nav>
        <a href="#closing" className="nav-cta" data-mag>Холбогдох</a>
      </div>
    </header>
  );
}
