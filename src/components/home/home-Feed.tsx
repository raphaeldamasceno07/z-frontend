import { tweet } from '@/data/tweet'
import { TweetItem } from '../tweet/tweet-item'

export const HomeFeed = () => {
  return (
    <section>
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
      <TweetItem tweet={tweet} />
    </section>
  )
}
