import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold text-blue-900">
          {new Date(`${meeting.date}T00:00:00`).toLocaleDateString(
            'en-US',
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }
          )}
        </h2>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium capitalize text-blue-800">
          {meeting.meetingType}
        </span>
      </div>

      <div className="space-y-2 text-sm text-slate-600">
        <p>
          <strong className="text-slate-800">Presiding:</strong>{' '}
          {meeting.presiding}
        </p>

        <p>
          <strong className="text-slate-800">Conducting:</strong>{' '}
          {meeting.conducting}
        </p>

        <p>
          <strong className="text-slate-800">Opening Hymn:</strong>{' '}
          {meeting.openingHymn.number} - {meeting.openingHymn.title}
        </p>

        <p>
          <strong className="text-slate-800">Speakers and Musical Numbers:</strong>{' '}
          {meeting.speakers.length}
        </p>
      </div>

      <Link
        href={`/meetings/${meeting.id}`}
        className="mt-5 inline-block rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-800"
      >
        View Meeting Details
      </Link>
    </article>
  );
}