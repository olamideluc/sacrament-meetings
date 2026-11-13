export default function MeetingsLoading() {
    return (
        <div
            className="space-y-6"
            aria-busy="true"
            aria-live="polite"
        >
            <div>
                <div className="h-8 w-48 animate-pulse rounded bg-slate-200" />

                <div className="mt-3 h-4 w-72 animate-pulse rounded bg-slate-200" />
            </div>

            <p className="text-sm text-slate-600">
                Loading meeting information...
            </p>

            <div className="grid gap-6 md:grid-cols-2">
                {[1, 2, 3, 4].map((item) => (
                    <div
                        key={item}
                        className="animate-pulse rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                    >
                        <div className="mb-4 h-6 w-40 rounded bg-slate-200" />
                        <div className="mb-3 h-4 w-32 rounded bg-slate-200" />
                        <div className="mb-3 h-4 w-48 rounded bg-slate-200" />
                        <div className="h-10 w-36 rounded bg-slate-200" />
                    </div>
                ))}
            </div>
        </div>
    );
}