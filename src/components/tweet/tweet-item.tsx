'use client'

import { Tweet } from '@/types/tweet'
import { faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons/faRetweet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useState } from 'react'

type Props = {
  tweet: Tweet
}

export const TweetItem = ({ tweet }: Props) => {
  const [liked, setLiked] = useState(tweet.liked)

  const hamdleLikeButton = () => {
    setLiked(!liked)
  }

  return (
    <div className="flex gap-6 p-6 border-b-2 border-gray-900">
      <div>
        <Link href={`/${tweet.user.slug}`}>
          <img
            src={tweet.user.avatar}
            alt={tweet.user.name}
            className="size-10 rounded-full"
          />
        </Link>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-x-3">
          <div className="font-bold text-lg">
            <Link href={`${tweet.user.slug}`}>{tweet.user.name}</Link>
          </div>
          <div className="text-xs text-gray-500">@{tweet.user.slug}</div>
        </div>
        <div className="py-4 text-lg">{tweet.body}</div>
        {tweet.image && (
          <div className="w-full">
            <img
              src={tweet.image}
              alt={tweet.name}
              className="w-full rounded-2xl"
            />
          </div>
        )}
        <div className="flex mt-6 text-gray-500">
          <div className="flex-1">
            <Link href={`/tweet/${tweet.id}`}>
              <div className="inline-flex items-center gap-2 cursor-pointer">
                <FontAwesomeIcon icon={faComment} className="size-6" />
                <div className="text-lg">{tweet.commentCount}</div>
              </div>
            </Link>
          </div>
          <div className="flex-1">
            <Link href={`/tweet/${tweet.id}`}>
              <div className="inline-flex items-center gap-2 cursor-pointer">
                <FontAwesomeIcon icon={faRetweet} className="size-6" />
                <div className="text-lg">{tweet.retweetCount}</div>
              </div>
            </Link>
          </div>
          <div className="flex-1">
            <Link href={`/tweet/${tweet.id}`}>
              <div
                onClick={hamdleLikeButton}
                className={`inline-flex items-center gap-2 cursor-pointer ${
                  liked && 'text-red-400'
                }`}
              >
                <FontAwesomeIcon
                  icon={liked ? faHeartFilled : faHeart}
                  className="size-6"
                />
                <div className="text-lg">{tweet.likeCount}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
