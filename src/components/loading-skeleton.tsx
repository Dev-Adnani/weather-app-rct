import { Skeleton } from "./ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 row-gap-10 md:grid-cols-6">
      <Skeleton className="h-[200px] w-full rounded-lg"/>
      <Skeleton className="h-[200px] w-full rounded-lg"/>
      <Skeleton className="h-[200px] w-full rounded-lg"/>
      <Skeleton className="h-[200px] w-full rounded-lg"/>
      <Skeleton className="h-[200px] w-full rounded-lg"/>
      <Skeleton className="h-[200px] w-full rounded-lg"/>
      </div>
        <div className="grid gap-6">
            <Skeleton className="h-[300px] w-full rounded-lg"/>
            <Skeleton className="h-[300px] w-full rounded-lg"/>
            <div className="grid gap-6 md:grid-cols-2">
                <Skeleton className="h-[300px] w-full rounded-lg"/>
                <Skeleton className="h-[300px] w-full rounded-lg"/>
            </div>
        </div>
    </div>
  )
}