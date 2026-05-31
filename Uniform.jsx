export default function Uniform(){
  return (
    <section id="uniform" className="sec-pad">
      <div className="bgmark" data-speed="0.5" style={{top:'4%',left:'-3%'}}>2013</div>
      <div className="wrap">
        <span className="eyebrow reveal">Онцлох · МЕГА төсөл</span>
        <div className="uni-hero reveal">
          <div className="uni-img"><img  src="/assets/uniform-studio.jpg" alt="Сурагчийн дүрэмт хувцас" id="uniImg" /></div>
          <div className="uni-text">
            <span className="badge">2013 · Кластер төсөл</span>
            <h2>Эх орон шингэсэн <span className="eon">Эрдмийн дүрэмт хувцас</span></h2>
            <p className="lead">Монголын Оёдлын Нэгдсэн Холбооноос санаачлан, Засгийн газрын дэмжлэгтэйгээр хэрэгжсэн салбарын хамгийн амжилттай төсөл.</p>
            <p>Орон нутагт үйлдвэр байгуулж ажлын байр нэмэх, ЕБС-ийн сурагчдыг монгол хонины ноос агуулсан давуун материалаар хийсэн, чанар стандартын шаардлага хангасан дүрэмт хувцсаар 100% дотоодын үйлдвэрлэлээр хангах зорилготой. Хувцасны материалын стандартыг ШУТИС-ийн багш нар боловсруулж, БСШУЯ, ХХААХҮЯ бодлогын түвшинд дэмжив.</p>
          </div>
        </div>
        <div className="uni-pillars reveal">
          <div className="upill"><div className="pi">①</div><span className="lbl">Кластер тогтолцоо</span><p>Бүтээлч үйлс, Өүлэн мэнч, Торгон хийц, Төмөр трейд, Шилмэл загвар, Шүтэн уул, Эрдсүлж — толгой үйлдвэрүүд.</p></div>
          <div className="upill"><h4><span data-count="3000" data-suffix="+">0</span></h4><span className="lbl">Ажлын байр</span><p>Кластерт бусад үйлдвэрүүдийг татан, 3000 гаруй ажлын байрыг тогтмол хангав.</p></div>
          <div className="upill"><h4><span data-count="100" data-suffix="%">0</span></h4><span className="lbl">Дотоодын үйлдвэрлэл</span><p>Сурагчийн дүрэмт хувцсыг дотооддоо бүрэн үйлдвэрлэж, гадагшаа урсах валютыг зогсоов.</p></div>
          <div className="upill"><div className="pi">✦</div><span className="lbl">Үндэсний материал</span><p>Монгол хонины ноос агуулсан, эрүүл ахуйн шаардлага хангасан давуун материал.</p></div>
        </div>
        <div className="uni-gallery">
          <figure className="clip"><img  src="/assets/uniform-kids.jpg" alt="Сурагчид" /></figure>
          <figure className="clip"><img  src="/assets/uniform-group.jpg" alt="Дүрэмт хувцасны загвар" /></figure>
          <figure className="clip"><img  src="/assets/map.jpg" alt="Улсын хэмжээнд түгээлт" /></figure>
        </div>
      </div>
    </section>
  );
}
