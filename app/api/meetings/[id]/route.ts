import { getMeetingById } from "@/lib/meetings-db";

interface MeetingRouteContext {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(
    request: Request,
    { params }: MeetingRouteContext
) {
    const { id } = await params;
    const meetingId = Number(id);

    // Return 400 if the ID is not a valid integer.
    if (!Number.isInteger(meetingId)) {
        return Response.json(
            { error: "Invalid meeting ID." },
            { status: 400 }
        );
    }

    // Find the meeting using its ID.
    const meeting = getMeetingById(meetingId);

    // Return 404 if the meeting does not exist.
    if (!meeting) {
        return Response.json(
            { error: "Meeting not found." },
            { status: 404 }
        );
    }

    // Return the matching meeting.
    return Response.json(meeting, { status: 200 });
}