import { CurrentDate } from "@/components/DateInfo";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-6 py-5 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold">
            Sacrament Meeting Planner
          </h1>
          <p className="mt-1 text-sm text-blue-200">
            Porto-Novo Ward
          </p>
        </div>

        <p className="text-sm text-blue-100">
          <CurrentDate />
        </p>
      </div>
    </header>
  );
}