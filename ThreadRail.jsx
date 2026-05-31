export default function ThreadRail(){
  return (
    <div id="rail" aria-hidden="true">
      <svg viewBox="0 0 54 1000" preserveAspectRatio="none">
        <defs><linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cf202a"/><stop offset="0.5" stopColor="#d4af77"/><stop offset="1" stopColor="#2e5aa4"/>
        </linearGradient></defs>
        <path id="threadPath" className="draw" d="M27,0 C8,120 46,200 27,320 C10,430 44,520 27,640 C12,740 46,840 27,1000"/>
      </svg>
    </div>
  );
}
