import Link from "next/link";


interface MeetingsLayoutProps {
    children: React.ReactNode;
}

export default function MeetingsLayout({
    children,
}: MeetingsLayoutProps) {
    return (
        <section>
            <div className="mb-6 border-b border-slate-200 pb-4">
                <h1 className="text-2xl font-bold text-blue-900">
                    Meetings
                </h1>

                <p className="mt-1 text-sm text-slate-600">
                    Browse meeting programs and view upcoming or past meetings.
                </p>

                <nav className="mt-4 flex flex-wrap gap-3">
                    <Link
                        href="/meetings"
                        className="rounded-md px-3 py-2 text-sm font-medium text-blue-900 hover:bg-blue-50"
                    >
                        All Meetings
                    </Link>

                    <Link
                        href="/meetings/current"
                        className="rounded-md px-3 py-2 text-sm font-medium text-blue-900 hover:bg-blue-50"
                    >
                        Current Meeting
                    </Link>
                </nav>
            </div>

            {children}
        </section>
    );
}