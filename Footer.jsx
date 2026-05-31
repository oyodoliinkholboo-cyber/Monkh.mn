export default function Footer(){
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <a className="brand" href="#hero"><img  src="/assets/logo.png" alt="MONH" /><div><b>Монголын Оёдлын<br />Нэгдсэн Холбоо</b><span>МОНХ</span></div></a>
          <nav><a href="#years">Түүх</a><a href="#mission">Эрхэм зорилго</a><a href="#projects">Төслүүд</a><a href="#uniform">Дүрэмт хувцас</a><a href="#members">Гишүүд</a><a href="#world">Хамтын ажиллагаа</a><a href="#future">Ирээдүй</a></nav>
        </div>
        <div className="foot-bottom"><span>© Монголын Оёдлын Нэгдсэн Холбоо · МОНХ</span><span>ӨНГӨРСӨН · ОДОО · ИРЭЭДҮЙ</span></div>
      </div>
    </footer>
  );
}
