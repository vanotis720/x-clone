import CommonMoreButton from "../assets/icons/More-2.svg";
export default function TrendItem() {
  return (
    <div className="flex items-center justify-between h-20 my-3">
      <div className="flex flex-col">
        <span className="text-slate-500">Trending in Turkey</span>
        <span className="text-white">#SQUID</span>
        <span className="text-slate-500">2,066 Tweets</span>
      </div>
      <img src={CommonMoreButton} alt={name} className="h-px-32" />
    </div>
  );
}
