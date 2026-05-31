export default function IntroVideo(){
  return (
    <div id="intro">
      <video id="introVid" muted playsInline autoPlay preload="auto" poster="/assets/hero.jpg">
        <source  src="/assets/intro.mp4" type="video/mp4" />
      </video>
      <div id="introHint">МОНХ</div>
      <button id="introSkip" type="button">Алгасах →</button>
    </div>
  );
}
