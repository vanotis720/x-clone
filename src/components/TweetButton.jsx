/* eslint-disable react/prop-types */
import { formatCount } from "../utils/format";

export default function TweetButton({
  icon,
  counter,
  handleClick,
  id,
  hoverColor = "group-hover:text-blue-500",
}) {
  return (
    <button onClick={() => handleClick(id)} className="flex w-1/4 group">
      <img
        src={icon}
        alt="media"
        className={`justify-start mr-1 transition-colors duration-300 ease-in-out ${hoverColor}`}
      />
      {counter && (
        <span
          className={`text-slate-600 transition-colors duration-300 ease-in-out ${hoverColor}`}
        >
          {formatCount(counter)}
        </span>
      )}
    </button>
  );
}
