import Button from "./Button";
import giff from "../assets/icons/Gif.svg";
import emoji from "../assets/icons/Emoji.svg";
import schedule from "../assets/icons/Schedule.svg";
import poll from "../assets/icons/Poll.svg";
import media from "../assets/icons/Poll.svg";

export default function TweetInput() {
  return (
    <div className="md:flex p-3 h-auto border border-slate-800">
      <img
        src="https://picsum.photos/200"
        alt={"alt"}
        className="md:h-16 hidden rounded-full"
      />
      <div className="ms-5 mb-5 w-full items-center">
        <textarea
          className="bg-slate-950 w-full h-3/4 text-white resize-y overflow-hidden focus:outline-none mb-2"
          name="tweet"
          placeholder="What's happening?"
        ></textarea>
        <div className="flex justify-between items-center w-full h-1/4">
          <div className="flex">
            <img src={media} alt="media" className="h-6 mr-2" />
            <img src={giff} alt="gif" className="h-6  mr-2" />
            <img src={poll} alt="poll" className="h-6  mr-2" />
            <img src={emoji} alt="emoji" className="h-6  mr-2" />
            <img src={schedule} alt="schedule" className="h-6" />
          </div>
          <Button style="bg-blue-700 text-white w-32 h-9 py-2 opacity-75" />
        </div>
      </div>
    </div>
  );
}
