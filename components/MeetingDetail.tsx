import type { SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
    meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
    const formattedDate = new Date(
        `${meeting.date}T00:00:00`
    ).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <header className="mb-6 border-b border-slate-200 pb-4">
                <p className="mb-2 text-sm font-medium uppercase text-blue-800">
                    {meeting.meetingType} Meeting
                </p>

                <h1 className="text-2xl font-bold text-blue-900">
                    Sacrament Meeting Program
                </h1>

                <p className="mt-2 text-slate-600">{formattedDate}</p>

                <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                    <p>
                        <strong>Presiding:</strong> {meeting.presiding}
                    </p>
                    <p>
                        <strong>Conducting:</strong> {meeting.conducting}
                    </p>
                </div>
            </header>

            <div className="space-y-6">
                <section>
                    <h2 className="mb-2 text-lg font-semibold text-blue-900">
                        Announcements
                    </h2>

                    {meeting.announcements?.length ? (
                        <ul className="list-disc space-y-1 pl-6 text-slate-700">
                            {meeting.announcements.map((announcement, index) => (
                                <li key={index}>{announcement}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-slate-500">No announcements.</p>
                    )}
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-blue-900">
                        Opening Hymn
                    </h2>
                    <p className="text-slate-700">
                        Hymn {meeting.openingHymn.number}: {meeting.openingHymn.title}
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-blue-900">
                        Opening Prayer
                    </h2>
                    <p className="text-slate-700">{meeting.openingPrayer}</p>
                </section>

                <section>
                    <h2 className="mb-2 text-lg font-semibold text-blue-900">
                        Ward Business
                    </h2>

                    {meeting.wardBusiness.length > 0 ? (
                        <ul className="list-disc space-y-1 pl-6 text-slate-700">
                            {meeting.wardBusiness.map((item, index) => (
                                <li key={index}>{item.description}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-slate-500">No ward business.</p>
                    )}
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-blue-900">
                        Stake Business
                    </h2>
                    <p className="text-slate-700">
                        {meeting.stakeBusiness ? 'Yes' : 'No'}
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-blue-900">
                        Sacrament Hymn
                    </h2>
                    <p className="text-slate-700">
                        Hymn {meeting.sacramentHymn.number}:{' '}
                        {meeting.sacramentHymn.title}
                    </p>
                </section>

                <section>
                    <h2 className="mb-2 text-lg font-semibold text-blue-900">
                        Speakers and Musical Numbers
                    </h2>

                    {meeting.speakers.length > 0 ? (
                        <ul className="space-y-3">
                            {meeting.speakers.map((item, index) => (
                                <li
                                    key={index}
                                    className="rounded-md bg-slate-50 p-3"
                                >
                                    <p className="font-medium text-slate-800">
                                        {item.type === 'speaker'
                                            ? 'Speaker'
                                            : 'Musical Number'}: {item.name}
                                    </p>

                                    {item.topic && (
                                        <p className="mt-1 text-sm text-slate-600">
                                            {item.topic}
                                        </p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-slate-500">
                            No speakers or musical numbers listed.
                        </p>
                    )}
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-blue-900">
                        Closing Hymn
                    </h2>
                    <p className="text-slate-700">
                        Hymn {meeting.closingHymn.number}: {meeting.closingHymn.title}
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-blue-900">
                        Closing Prayer
                    </h2>
                    <p className="text-slate-700">{meeting.closingPrayer}</p>
                </section>
            </div>
        </article>
    );
}