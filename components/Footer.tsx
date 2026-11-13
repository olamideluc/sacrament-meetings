import { CurrentYear } from "@/components/DateInfo";

export default function Footer() {
    return (
        <footer className="mt-auto bg-slate-900 py-5 text-center text-sm text-slate-300">
            <p>
                &copy; <CurrentYear /> Sacrament Meeting Planner.
                All rights reserved.
            </p>
        </footer>
    );
}