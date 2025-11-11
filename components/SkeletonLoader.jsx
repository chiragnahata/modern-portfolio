import { motion } from "framer-motion";

export const SkeletonCard = () => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 animate-pulse">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-white/10 rounded-lg" />
      <div className="flex-1 space-y-3">
        <div className="h-4 bg-white/10 rounded w-3/4" />
        <div className="h-3 bg-white/10 rounded w-1/2" />
        <div className="space-y-2">
          <div className="h-2 bg-white/10 rounded" />
          <div className="h-2 bg-white/10 rounded w-5/6" />
        </div>
      </div>
    </div>
  </div>
);

export const SkeletonGrid = ({ count = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, index) => (
      <SkeletonCard key={index} />
    ))}
  </div>
);

export const SkeletonProfile = () => (
  <div className="flex items-center gap-4 animate-pulse">
    <div className="w-20 h-20 bg-white/10 rounded-full" />
    <div className="flex-1 space-y-3">
      <div className="h-6 bg-white/10 rounded w-1/2" />
      <div className="h-4 bg-white/10 rounded w-3/4" />
      <div className="h-3 bg-white/10 rounded w-2/3" />
    </div>
  </div>
);

export const SkeletonList = ({ count = 5 }) => (
  <div className="space-y-4">
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="bg-white/5 rounded-lg p-4 animate-pulse">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-full" />
          <div className="flex-1 space-y-2">
            <div className="h-3 bg-white/10 rounded w-1/3" />
            <div className="h-2 bg-white/10 rounded w-1/2" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const SkeletonBlogPost = () => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden animate-pulse">
    <div className="h-48 bg-white/10" />
    <div className="p-6 space-y-4">
      <div className="flex gap-4">
        <div className="h-3 bg-white/10 rounded w-20" />
        <div className="h-3 bg-white/10 rounded w-24" />
      </div>
      <div className="h-6 bg-white/10 rounded w-3/4" />
      <div className="space-y-2">
        <div className="h-3 bg-white/10 rounded" />
        <div className="h-3 bg-white/10 rounded w-5/6" />
        <div className="h-3 bg-white/10 rounded w-4/5" />
      </div>
      <div className="flex gap-2">
        <div className="h-6 bg-white/10 rounded-full w-16" />
        <div className="h-6 bg-white/10 rounded-full w-16" />
        <div className="h-6 bg-white/10 rounded-full w-16" />
      </div>
    </div>
  </div>
);

export const SkeletonProjectCard = () => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 animate-pulse">
    <div className="space-y-4">
      <div className="h-40 bg-white/10 rounded-xl" />
      <div className="h-5 bg-white/10 rounded w-2/3" />
      <div className="space-y-2">
        <div className="h-3 bg-white/10 rounded" />
        <div className="h-3 bg-white/10 rounded w-4/5" />
      </div>
      <div className="flex gap-2">
        <div className="h-8 bg-white/10 rounded-lg w-20" />
        <div className="h-8 bg-white/10 rounded-lg w-20" />
      </div>
    </div>
  </div>
);

export const SkeletonText = ({ lines = 3 }) => (
  <div className="space-y-2 animate-pulse">
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className="h-3 bg-white/10 rounded"
        style={{ width: `${100 - index * 10}%` }}
      />
    ))}
  </div>
);

export const PageSkeleton = () => (
  <div className="min-h-screen bg-primary/30 py-32">
    <div className="container mx-auto px-4">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="text-center space-y-4 mb-12">
          <div className="h-12 bg-white/10 rounded w-1/2 mx-auto animate-pulse" />
          <div className="h-4 bg-white/10 rounded w-2/3 mx-auto animate-pulse" />
        </div>

        {/* Content Skeleton */}
        <SkeletonGrid count={6} />
      </div>
    </div>
  </div>
);

export default {
  Card: SkeletonCard,
  Grid: SkeletonGrid,
  Profile: SkeletonProfile,
  List: SkeletonList,
  BlogPost: SkeletonBlogPost,
  ProjectCard: SkeletonProjectCard,
  Text: SkeletonText,
  Page: PageSkeleton,
};
