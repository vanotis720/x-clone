export default function MenuItem({ img, name }) {
  return (
    <div className="flex items-center mb-9">
      <img src={img} alt={name} className="h-px-32" />
      <a href="#" className="text-white text-base font-bold ms-3">
        {name}
      </a>
    </div>
  );
}
