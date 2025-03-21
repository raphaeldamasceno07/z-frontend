export const RecommendationItemSkeleton = () => {
  return (
    <div className="animate-pulse flex items-center">
      <div className="size-10 mr-2 rounded-full bg-gray-600 "></div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="bg-gray-600 h-4 w-3/4"></div>
        <div className="bg-gray-600 h-4 w-1/4"></div>
      </div>
    </div>
  )
}
