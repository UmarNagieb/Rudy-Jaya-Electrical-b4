import { useEffect, useId, useState } from "react";
import { Clock } from "lucide-react";

const WEEKDAYS = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

function isBusinessOpen(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
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

function formatLocalTime(date) {
  return new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(date);
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
  const tooltipId = useId();
  const [now, setNow] = useState(() => new Date());
  const [isOpen, setIsOpen] = useState(isBusinessOpen);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const currentTime = new Date();
      setNow(currentTime);
      setIsOpen(isBusinessOpen(currentTime));
    }, 60_000);
    return () => window.clearInterval(intervalId);
  }, []);

  const statusClass = isOpen
    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
    : "border-zinc-200 bg-zinc-50 text-zinc-600";

  return (
    <span className="group relative inline-flex w-fit">
      <span
        role="status"
        aria-live="polite"
        aria-describedby={tooltipId}
        tabIndex={0}
        className={`inline-flex w-fit items-center gap-2 rounded-full border font-semibold ${compact ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-xs"
          } ${statusClass}`}
      >
        <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
          {isOpen && (
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
          )}
          <span
            className={`relative inline-flex h-2.5 w-2.5 rounded-full ${isOpen ? "bg-emerald-500" : "bg-zinc-400"
              }`}
          />
        </span>
        {isOpen ? "Sedang buka" : "Sedang tutup"}
      </span>

      <span
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none invisible absolute left-0 top-full z-50 mt-2 w-56 -translate-y-1 rounded-lg border border-onyx/10 bg-paper p-3.5 text-onyx opacity-0 shadow-[0_12px_32px_rgba(15,15,15,0.14)] transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
      >
        <span className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-gold/15 text-onyx">
            <Clock className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-conduit">
              Waktu lokal Anda
            </span>
            <span className="mt-1 block font-mono text-lg font-semibold leading-none tabular-nums">
              {formatLocalTime(now)}
            </span>
          </span>
        </span>
      </span>
    </span>
  );
}