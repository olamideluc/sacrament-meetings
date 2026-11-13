import MeetingCard from "@/components/MeetingCard";
import type { SacramentMeeting } from "@/lib/types";
import { headers } from "next/headers";

export default async function MeetingsPage() {
    const headersList = await headers();

    const host = headersList.get("host");
    const protocol =
        headersList.get("x-forwarded-proto") ?? "http";

    if (!host) {
        throw new Error("Unable to determine the application URL.");
    }

    const baseUrl = `${protocol}://${host}`;

    const response = await fetch(`${baseUrl}/api/meetings`);

    if (!response.ok) {
        throw new Error("Failed to fetch meetings.");
    }

    const meetings: SacramentMeeting[] = await response.json();

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-blue-900">
                    All Meetings
                </h2>

                <p className="mt-2 text-slate-600">
                    Browse all scheduled meeting programs.
                </p>
            </div>

            {meetings.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                    {meetings.map((meeting) => (
                        <MeetingCard key={meeting.id} meeting={meeting} />
                    ))}
                </div>
            ) : (
                <p className="rounded-lg border border-slate-200 bg-white p-6 text-slate-600">
                    No meetings are currently available.
                </p>
            )}
        </div>
    );
}