"use client";

import type { HTMLAttributes } from "react";
import { Tweet } from "react-tweet";

interface TweetsProps extends HTMLAttributes<HTMLDivElement> {
  tweets: string[];
}

export const Tweets = ({ tweets }: TweetsProps) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6 xl:grid-cols-3'>
      {tweets.map((tweetId, i) => (
        <div key={`${tweetId}-${i}`}>
          <Tweet id={tweetId} />
        </div>
      ))}
    </div>
  );
};
