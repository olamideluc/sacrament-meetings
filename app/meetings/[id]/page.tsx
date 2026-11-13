import MeetingDetail from "@/components/MeetingDetail";
import type { SacramentMeeting } from "@/lib/types";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

interface MeetingPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function MeetingPage({
    params,
}: MeetingPageProps) {
    const { id } = await params;

    const headersList = await headers();

    const host = headersList.get("host");
    const protocol =
        headersList.get("x-forwarded-proto") ?? "http";

    if (!host) {
        throw new Error("Unable to determine the application URL.");
    }

    const baseUrl = `${protocol}://${host}`;

    const response = await fetch(
        `${baseUrl}/api/meetings/${id}`,
        { cache: "no-store" }
    );

    if (response.status === 400 || response.status === 404) {
        notFound();
    }

    if (!response.ok) {
        throw new Error("Failed to fetch meeting details.");
    }

    const meeting: SacramentMeeting = await response.json();

    return <MeetingDetail meeting={meeting} />;
}