import { Skeleton } from "@/components/ui/skeleton";

// Custom skeleton for member cards
export function MemberCardSkeleton({ className = "" }) {
	return (
		<div className={`mx-auto w-full max-w-sm ${className}`}>
			<div className="relative">
				{/* Card shadow */}
				<div className="absolute top-2 left-2 h-full w-full rounded-lg bg-[#cfc9b3]" />

				{/* Main card */}
				<div className="relative rounded-lg border-2 border-[#b2a585] bg-[#efeee5] p-6">
					{/* Image skeleton */}
					<div className="mb-4 flex justify-center">
						<Skeleton className="h-32 w-32 rounded-full" />
					</div>

					{/* Name tag skeleton */}
					<div className="mb-3 flex justify-center">
						<Skeleton className="h-8 w-24 rounded-full" />
					</div>

					{/* Role skeleton */}
					<div className="mb-4 text-center">
						<Skeleton className="mx-auto h-6 w-32" />
					</div>

					{/* Social links skeleton */}
					<div className="flex justify-center space-x-3">
						<Skeleton className="h-10 w-10 rounded-full" />
						<Skeleton className="h-10 w-10 rounded-full" />
					</div>
				</div>
			</div>
		</div>
	);
}

// Main skeleton layout
export function PeoplePageSkeleton() {
	return (
		<div className="mx-auto h-full w-full max-w-7xl px-4 py-12">
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
				{/* Text section skeleton */}
				<div className="lg:col-span-1">
					<div className="space-y-4">
						<Skeleton className="h-20 w-48" />
						<div className="space-y-2">
							<Skeleton className="h-12 w-40" />
							<Skeleton className="h-12 w-56" />
						</div>
						<div className="mt-6 space-y-3">
							<Skeleton className="h-6 w-full" />
							<Skeleton className="h-6 w-3/4" />
							<Skeleton className="h-6 w-1/2" />
						</div>
						<Skeleton className="mt-4 h-10 w-32 rounded-full" />
					</div>
				</div>

				{/* First two member cards skeleton */}
				<div className="lg:col-span-1">
					<MemberCardSkeleton />
				</div>
				<div className="lg:col-span-1">
					<MemberCardSkeleton />
				</div>
			</div>

			{/* Rest of the member cards skeleton */}
			<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{[...Array(6)].map((_, idx) => (
					<div key={`skeleton-${idx}`} className={`w-full ${idx % 3 === 1 ? "mt-16" : ""}`}>
						<MemberCardSkeleton />
					</div>
				))}
			</div>

			{/* Bottom section skeleton */}
			<div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-3">
				<div className="lg:col-span-2"></div>
				<div className="relative lg:col-span-1">
					<div className="absolute -right-2 -bottom-2 z-0 h-full w-full rounded-md bg-gray-200" />
					<div className="relative rounded-md border-2 border-gray-300 bg-white p-6">
						<Skeleton className="mb-4 h-8 w-48" />
						<div className="space-y-2">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-3/4" />
							<Skeleton className="h-4 w-5/6" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
