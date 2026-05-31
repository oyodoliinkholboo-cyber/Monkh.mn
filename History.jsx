export default function History(){
  return (
    <section id="history" className="sec-pad">
      <div className="bgmark" data-speed="0.5" style={{bottom:'2%',right:'-3%'}}>1990</div>
      <div className="wrap">
        <span className="eyebrow reveal">Оёдлын салбарын түүх</span>
        <div className="sec-head">
          <h2 className="reveal">Монголын Оёдлын <span className="eon">Салбар</span></h2>
          <p className="reveal">Төвлөрсөн төлөвлөгөөт эдийн засгаас зах зээлд шилжих шилжилтийг оёдлын салбар хамгийн эрсдэл багатай туулсан. АНУ-ын экспортын таатай нөхцөл, квотын хязгааргүй боломжийг ашиглан үйлдвэрлэл эрчимтэй өрнөв.</p>
        </div>
        <div className="hist-strip">
          <figure className="clip"><img  src="/assets/history-floor.jpg" alt="Оёдлын үйлдвэр" /></figure>
          <figure className="clip"><img  src="/assets/workers.jpg" alt="Оёдолчид" /></figure>
          <figure className="clip"><img  src="/assets/history-export.jpg" alt="Экспортын бүтээгдэхүүн" /></figure>
          <figure className="clip"><img  src="/assets/founding.jpg" alt="Холбооны үүсэл" /></figure>
        </div>
        <div className="hist-stats reveal">
          <div><b><span data-count="62">0</span></b><small>экспортын эрхтэй аж ахуй нэгж (14 үндэсний, 26 гадаад, 22 хамтарсан)</small></div>
          <div><b><span data-count="100" data-prefix="≈">0</span></b><small>жижиг үйлдвэрийг ажлаар хангав</small></div>
          <div><b><span data-count="30000">0</span></b><small>орчим ажлын байр бий болгов</small></div>
          <div><b><span data-count="2900">0</span></b><small>гаруй чингэлэг ачаа жилд эргэлтэд</small></div>
        </div>
        <div className="tl">
          <div className="tl-item reveal"><div className="tl-year">1990</div><h4>Шилжилтийн эхэн ба АНУ-ын экспорт</h4><p>Монголд үйлдвэрлэсэн оёмол, сүлжмэл бүтээгдэхүүнийг АНУ-д экспортлох таатай нөхцөл бүрдэж, квотын хязгааргүйг ашиглан гадаадын үйлдвэрлэгчид Монголд оёдлын үйлдвэрүүдээ нээж эхлэв.</p></div>
          <div className="tl-item reveal"><div className="tl-year">1992</div><h4>«Оёмол бүтээгдэхүүн үйлдвэрлэгчдийн холбоо» ТББ</h4><p>Үйлдвэрүүдийн эрх ашгийг хамгаалах, төр засагтай холбох зорилгоор байгуулагдав. Анхны дарга Р.Лутаа, гүйцэтгэх захирал Л.Балжинням, 28 гишүүн үйлдвэртэйгээр үйл ажиллагаагаа явуулж байв.</p></div>
          <div className="tl-item reveal"><div className="tl-year">2002–2005</div><h4>Гишүүдийн эрх ашгийн төлөө</h4><p>Н.Даш-Өлзий тэргүүтэй удирдлага гишүүн байгууллагуудынхаа эрх ашгийг хамгаалж, ажилчдын нийгмийн даатгалын шимтгэлийг аж ахуйн нэгжид буцаан олгуулах шийдвэрийг гаргуулав.</p></div>
          <div className="tl-item reveal"><div className="tl-year">2007</div><h4>Үндэсний хөрөнгөөр үргэлжлэв</h4><p>Их Британийн хөрөнгө оруулалттай «Тэмүүжин менч» ХХК-ийн 463 мэргэжилтэй боловсон хүчнийг дотоодын «Өүлэн Менч» ХХК шилжүүлэн авч, АНУ-ын захиалгыг 2012 он хүртэл үргэлжлүүлэв. ЗГ-аас оёдлын материал, тоног төхөөрөмжийг НӨАТ-аас чөлөөлөв.</p></div>
          <div className="tl-item reveal"><div className="tl-year">2008</div><h4>Монголын Оёдлын Нэгдсэн Холбоо байгуулагдав</h4><p>Мэргэжлийн 5 холбоо, 3 дээд сургууль, 21 үйлдвэр, аж ахуйн нэгжийг эгнээндээ нэгтгэсэн загвар хөгжүүлэгч, үндэсний үйлдвэрлэгч мэргэжлийн холбоо болж байгуулагдав.</p></div>
        </div>
      </div>
    </section>
  );
}
