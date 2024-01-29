/* eslint-disable react/prop-types */
import reply from "../assets/icons/Reply.svg";
import retweet from "../assets/icons/Retweet.svg";
import react from "../assets/icons/React.svg";
import share from "../assets/icons/Share.svg";
import Linkify from "react-linkify";
import { formatDate } from "../utils/format";
import TweetButton from "./TweetButton";
import { randomDate } from "../utils/helpers";

export default function Tweet({ tweet, handleClick }) {
  const componentDecorator = (href, text, key) => (
    <a
      className="text-blue-600"
      href={href}
      key={key}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );

  return (
    <div className="flex p-3 border-b border-slate-800 h-fit">
      <img
        src={tweet.user.thumbnailProfil}
        alt="author avatar"
        className="h-16 rounded-full"
      />
      <div className="ms-5 w-full items-center">
        <div className="flex items-center">
          <h3 className="text-white font-extrabold text-lg">
            {tweet.user.name}
          </h3>
          {tweet.isVerified && (
            <svg
              className="mx-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5 12.5C22.5 10.92 21.625 9.55 20.352 8.9C20.506 8.465 20.59 7.995 20.59 7.5C20.59 5.29 18.88 3.502 16.772 3.502C16.302 3.502 15.852 3.586 15.436 3.752C14.818 2.415 13.51 1.5 12 1.5C10.49 1.5 9.18402 2.417 8.56302 3.75C8.14802 3.585 7.69702 3.5 7.22702 3.5C5.11702 3.5 3.40902 5.29 3.40902 7.5C3.40902 7.994 3.49202 8.464 3.64602 8.9C2.37402 9.55 1.49902 10.918 1.49902 12.5C1.49902 13.995 2.28102 15.298 3.44102 15.986C3.42102 16.156 3.40902 16.326 3.40902 16.5C3.40902 18.71 5.11702 20.5 7.22702 20.5C7.69702 20.5 8.14702 20.414 8.56202 20.25C9.18202 21.584 10.488 22.5 11.999 22.5C13.511 22.5 14.817 21.584 15.436 20.25C15.851 20.413 16.301 20.498 16.772 20.498C18.882 20.498 20.59 18.708 20.59 16.498C20.59 16.324 20.578 16.154 20.557 15.985C21.715 15.298 22.5 13.995 22.5 12.501V12.5ZM15.884 9.166L11.55 15.666C11.405 15.883 11.168 16 10.925 16C10.782 16 10.637 15.96 10.509 15.874L10.394 15.78L7.97902 13.365C7.68602 13.072 7.68602 12.597 7.97902 12.305C8.27202 12.013 8.74702 12.011 9.03902 12.305L10.809 14.072L14.634 8.332C14.864 7.987 15.33 7.896 15.674 8.125C16.02 8.355 16.114 8.821 15.884 9.165V9.166Z"
                fill="#D9D9D9"
              />
            </svg>
          )}
          <span className="text-slate-600 mx-1">@{tweet.user.username}</span>
          <span className="text-slate-600">
            {` . ${formatDate(
              tweet.date ?? randomDate(new Date("2022-01-01"), new Date())
            )}`}
          </span>
        </div>
        <div>
          <div className="text-white mt-2 mb-5">
            <Linkify componentDecorator={componentDecorator}>
              {tweet.body}
            </Linkify>
          </div>
          <div className="w-full h-1/3 mb-5">
            {tweet.url && (
              <img
                src={tweet.url}
                alt="alt"
                className="rounded-3xl max-h-80 min-w-64"
              />
            )}
          </div>
        </div>
        <div className="grid grid-cols-4 justify-items-start">
          <TweetButton icon={reply} counter={0} type="reply" />
          <TweetButton icon={retweet} counter={tweet.repost} type="retweet" />
          <TweetButton
            icon={react}
            counter={tweet.like}
            hoverColor="group-hover:text-orange-500"
            handleClick={handleClick}
            id={tweet.id}
            type="like"
          />
          <TweetButton icon={share} type="share" />
        </div>
      </div>
    </div>
  );
}
