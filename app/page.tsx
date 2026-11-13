import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Welcome Section */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700">
            Welcome
          </p>

          <h1 className="text-4xl font-bold leading-tight text-blue-950">
            Sacrament Meeting Planner
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Organize, manage, and view sacrament meeting programs in one
            convenient place. Keep track of hymns, prayers, announcements,
            speakers, and meeting assignments.
          </p>

          <Link
            href="/meetings"
            className="mt-6 inline-block rounded-md bg-blue-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
          >
            Browse Meetings
          </Link>
        </div>

        {/* Optimized Chapel Image */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/chapel-banner.png"
            alt="A peaceful chapel interior with a pulpit, wooden pews, flowers, and a copy of the Book of Mormon."
            width={1648}
            height={928}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-950">
          Meeting Planning Made Simple
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-900">
              Meeting Programs
            </h3>
            <p className="mt-2 text-slate-600">
              View meeting schedules, presiding leaders, and conducting
              assignments.
            </p>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-900">
              Hymns and Prayers
            </h3>
            <p className="mt-2 text-slate-600">
              Keep opening and closing hymns and prayers organized for
              each meeting.
            </p>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-900">
              Speakers and Music
            </h3>
            <p className="mt-2 text-slate-600">
              Review assigned speakers, musical numbers, and meeting
              announcements.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}