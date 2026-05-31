export default function WorldMap(){
  return (
    <section id="world" className="sec-pad" style={{background:'var(--bg-2)',borderTop:'1px solid var(--line)'}}>
      <div className="wrap">
        <span className="eyebrow reveal">Дэлхийтэй холбогдсон</span>
        <div className="sec-head"><h2 className="reveal">Гадаад <span className="eon">хамтын ажиллагаа</span></h2><p className="reveal">МОНХ-ийн гишүүн байгууллагууд дараах улсуудаас түүхий эд импортлож, оёмол бүтээгдэхүүнээ нийлүүлж байсан туршлагатай.</p></div>
        <div className="map-wrap reveal">
          <div className="map-stage">
            <svg id="mapSvg" viewBox="0 0 1000 500">
              <g id="mapLines"></g><g id="mapNodes"></g>
              <g className="country-node hub" transform="translate(640,215)"><circle r="7"></circle><text x="0" y="-16" textAnchor="middle">Монгол</text></g>
            </svg>
          </div>
          <div className="clegend"><span>АНУ</span><span>Казахстан</span><span>ОХУ</span><span>Швед</span><span>БНХАУ</span><span>Япон</span><span>ХБНГУ</span><span>Тайвань</span><span>Вьетнам</span></div>
        </div>
      </div>
    </section>
  );
}
