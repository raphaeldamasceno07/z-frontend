import { TrendingItem } from './trending-item'
import { TrendingItemSkeleton } from './trending-item-skeleton'

export const TrendingArea = () => {
  return (
    <div className="bg-gray-700 rounded-3xl">
      <h2 className="text-xl p-6">O que está acontecendo</h2>
      <div className="flex flex-col gap-4 p-6 pt-0">
        <TrendingItem label="#test" count={1234} />
        <TrendingItem label="#test" count={1234} />
        <TrendingItemSkeleton />
        <TrendingItemSkeleton />
      </div>
    </div>
  )
}
