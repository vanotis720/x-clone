import logoX from "./assets/x-white.svg";
import settingsIcon from "./assets/icons/Settings.svg";
import moreTweets from "./assets/icons/Top-Tweets.svg";
import MenuItem from "./components/MenuItem";
import { MENU } from "./constants/constants";
import TrendItem from "./components/TrendItem";
import TweetInput from "./components/TweetInput";
import Button from "./components/Button";
import Tweet from "./components/Tweet";
import tweets from "./assets/tweets-x.json";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState(tweets);

  const handleClick = (id) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return {
          ...post,
          favorites: parseFloat(post["favorites"]) + 1,
        };
      }
      return post;
    });

    setPosts(updatedPosts);

    console.log("====================================");
    console.log("updated");
    console.log("====================================");
  };
  return (
    <div className="grid grid-cols-12 gap-4 mx-52 mt-1 h-full relative">
      <div className="col-span-2 h-screen sticky top-1">
        {MENU.map((item, index) => (
          <MenuItem key={index} img={item.img} name={item.name} />
        ))}
        <Button style="bg-blue-700 text-white w-full py-5" />
      </div>
      <div className="grid grid-cols-subgrid gap-4 col-span-7 border-x border-slate-800 overflow-y-auto">
        <div className="flex justify-between items-center border-t border-slate-800 px-3">
          <h1 className="text-white font-bold">Home</h1>
          <img src={moreTweets} alt="more tweets icon" className="size-8" />
        </div>
        <TweetInput />
        {posts.map((item) => (
          <Tweet key={item.id} tweet={item} handleClick={handleClick} />
        ))}
      </div>
      <div className="col-span-3 h-screen mt-2 sticky top-1">
        <input
          type="search"
          placeholder="Search twitter"
          className="bg-slate-800 h-11 w-full rounded-3xl p-2 ps-5"
        />
        <div className="bg-slate-800 mt-3 p-3 rounded-xl">
          <div className="flex justify-between">
            <span className="text-white text-base font-bold">
              Trends for you
            </span>
            <img
              src={settingsIcon}
              alt="settings notifications"
              className="h-px-32"
            />
          </div>
          <div>
            <TrendItem />
          </div>
        </div>
        <div className="bg-slate-800 mt-3 p-3 rounded-xl">
          <div className="flex justify-between">
            <span className="text-white text-base font-bold">
              Who to follow
            </span>
          </div>
          <div>
            <TrendItem />
            <TrendItem />
            <TrendItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
