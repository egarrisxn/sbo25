import { type NextRequest, NextResponse } from "next/server";
import { getGoogleCalendarEvents } from "@/lib/calendar";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const month = searchParams.get("month");
    const year = searchParams.get("year");

    let timeMin: Date | undefined;
    let timeMax: Date | undefined;

    if (month && year) {
      const monthNum = Number.parseInt(month);
      const yearNum = Number.parseInt(year);

      timeMin = new Date(yearNum, monthNum, 1);
      timeMax = new Date(yearNum, monthNum + 1, 0, 23, 59, 59);
    }

    const events = await getGoogleCalendarEvents(timeMin, timeMax);

    return NextResponse.json({ events });
  } catch (error) {
    console.error("Calendar API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch calendar events" },
      { status: 500 }
    );
  }
}
