/* eslint-disable react/prop-types */
import { useState } from "react";
import { formatCount } from "../utils/format";

export default function TweetButton({
  icon,
  counter,
  handleClick,
  id,
  hoverColor = "group-hover:text-blue-500",
  type,
}) {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    if (type == "like") {
      handleClick(id, liked ? "unlike" : "like");
      setLiked(!liked);
    }
  };

  return (
    <button onClick={handleLikeClick} className="flex w-1/4 group">
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
