"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => {
    return () => { };
};

function getCurrentDate() {
    return new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function getCurrentYear() {
    return String(new Date().getFullYear());
}

const getServerSnapshot = () => "";

export function CurrentDate() {
    const currentDate = useSyncExternalStore(
        subscribe,
        getCurrentDate,
        getServerSnapshot
    );

    return <>{currentDate}</>;
}

export function CurrentYear() {
    const currentYear = useSyncExternalStore(
        subscribe,
        getCurrentYear,
        getServerSnapshot
    );

    return <>{currentYear}</>;
}