export default function Closing(){
  return (
    <section id="closing">
      <div className="cimg"><img  src="/assets/fashion-deel.jpg" alt="Үндэсний хувцас" /></div>
      <div className="wrap">
        <div className="close-thread reveal"></div>
        <span className="eyebrow reveal" style={{justifyContent:'center'}}>Аян үргэлжилнэ</span>
        <h2 className="reveal"><span className="eon">МОНХ.</span><br />Дараагийн түүхийг хамтдаа.</h2>
        <div className="cta-row reveal">
          <a href="#members" className="btn btn-grad" data-mag>Гишүүдтэй танилцах</a>
          <a href="#mission" className="btn btn-ghost" data-mag>Холбооны тухай</a>
        </div>
      </div>
    </section>
  );
}
