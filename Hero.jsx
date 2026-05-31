export default function Hero(){
  return (
    <section id="hero">
      <div className="hero-img"><img  src="/assets/hero.jpg" alt="Загварын үзүүлбэр" id="heroImg" /></div>
      <div className="hero-watermark">ОЁДОЛ</div>
      <div className="wrap hero-grid">
        <div className="hero-content">
          <h1 id="heroTitle">Монголын Оёдлын Нэгдсэн <span className="eon">Холбоо</span></h1>
          <p className="hero-sub">Монголд оёдлын үйлдвэрлэлийг хөгжүүлэх, дэлхийн түвшинд дүйцэхүйц загвар хийц, чанартай оёмол бүтээгдэхүүн үйлдвэрлэх.</p>
        </div>
        <div className="logo-stage">
          <div className="logo-card tilt" id="heroLogo"><img  src="/assets/logo.png" alt="MONH лого" /></div>
        </div>
      </div>
      <div className="hero-foot"><div className="wrap">
        <div className="scroll-hint"><span className="dot"></span> Утсыг дага</div>
        <div className="jtags"><span><b>Өнгөрсөн</b> · Бахархал</span><span><b>Одоо</b> · Итгэл</span><span><b>Ирээдүй</b> · Хөгжил</span></div>
      </div></div>
    </section>
  );
}
