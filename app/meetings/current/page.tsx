import { getMeetings } from "@/lib/meetings-db";
import { redirect } from "next/navigation";
import { connection } from "next/server";

export default async function CurrentMeetingPage() {
    await connection();

    const today = new Date();
    // Find the most recent Sunday.
    const dayOfWeek = today.getDay();
    const sunday = new Date(today);

    sunday.setDate(today.getDate() - dayOfWeek);

    // Format the Sunday date as YYYY-MM-DD using local date values.
    const year = sunday.getFullYear();
    const month = String(sunday.getMonth() + 1).padStart(2, "0");
    const day = String(sunday.getDate()).padStart(2, "0");

    const sundayDate = `${year}-${month}-${day}`;

    // Find a meeting scheduled for that Sunday.
    const meetings = getMeetings(sundayDate);

    if (meetings.length > 0) {
        redirect(`/meetings/${meetings[0].id}`);
    }

    // If no meeting exists for that Sunday, show all meetings.
    redirect("/meetings");
}