import { useEffect, useState } from "react";

const WEEKDAYS = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

function isBusinessOpen() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const currentMinutes = Number(values.hour) * 60 + Number(values.minute);
  const openingMinutes = values.weekday === "Sun" ? 9 * 60 : 8 * 60;

  return currentMinutes >= openingMinutes && currentMinutes < 20 * 60;
}

function getZoneOffsetMinutes(timeZone, date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const asUtc = Date.UTC(
    Number(values.year),
    Number(values.month) - 1,
    Number(values.day),
    Number(values.hour),
    Number(values.minute),
    Number(values.second)
  );

  return Math.round((asUtc - date.getTime()) / 60_000);
}

function formatMinutes(minutes) {
  const normalized = ((minutes % 1440) + 1440) % 1440;
  const hour = Math.floor(normalized / 60).toString().padStart(2, "0");
  const minute = (normalized % 60).toString().padStart(2, "0");

  return `${hour}.${minute}`;
}

function formatLocalRange(sourceDay, openingHour, closingHour, offsetDifference) {
  const opening = sourceDay * 1440 + openingHour * 60 + offsetDifference;
  const closing = sourceDay * 1440 + closingHour * 60 + offsetDifference;
  const localOpeningDay = ((Math.floor(opening / 1440) % 7) + 7) % 7;
  const localClosingDay = ((Math.floor(closing / 1440) % 7) + 7) % 7;
  const nextDayNote = localClosingDay !== localOpeningDay ? " (hari berikutnya)" : "";

  return `${WEEKDAYS[localOpeningDay]}, ${formatMinutes(opening)}–${formatMinutes(closing)}${nextDayNote}`;
}

export function getLocalBusinessHours(date = new Date()) {
  const jakartaOffset = getZoneOffsetMinutes("Asia/Jakarta", date);
  const visitorOffset = -date.getTimezoneOffset();
  const offsetDifference = visitorOffset - jakartaOffset;
  const weekdayStart = formatLocalRange(1, 8, 20, offsetDifference);
  const weekdayEnd = formatLocalRange(6, 8, 20, offsetDifference);
  const sunday = formatLocalRange(0, 9, 20, offsetDifference);
  const weekdayRange = `${weekdayStart.split(",")[0]}–${weekdayEnd.split(",")[0]}`;
  const weekdayHours = weekdayStart.slice(weekdayStart.indexOf(",") + 2);

  return {
    week: `${weekdayRange}, ${weekdayHours}`,
    sunday,
  };
}

export default function BusinessStatus({ compact = false }) {
  const [isOpen, setIsOpen] = useState(isBusinessOpen);

  useEffect(() => {
    const intervalId = window.setInterval(() => setIsOpen(isBusinessOpen()), 60_000);
    return () => window.clearInterval(intervalId);
  }, []);

  const statusClass = isOpen
    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
    : "border-zinc-200 bg-zinc-50 text-zinc-600";

  return (
    <span
      role="status"
      aria-live="polite"
      className={`inline-flex w-fit items-center gap-2 rounded-full border font-semibold ${
        compact ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-xs"
      } ${statusClass}`}
    >
      <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
        {isOpen && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            isOpen ? "bg-emerald-500" : "bg-zinc-400"
          }`}
        />
      </span>
      {isOpen ? "Sedang buka" : "Sedang tutup"}
    </span>
  );
}