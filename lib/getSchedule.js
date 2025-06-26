export async function getSchedule() {
  const fallbackData = [
    {
      date: "28-06-2025",
      city: "Tbilisi, Georgia",
      url: "https://tkt.ge/event/486339/tbilisi-piano-festi",
    },
  ];

  try {
    const res = await fetch(
      "https://api.sheetbest.com/sheets/ca35433a-4760-4b26-9453-9ef4b37f20f0",
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Fetch failed");

    const data = await res.json();

    return data.map((item) => ({
      date: item.date,
      city: item.city,
      url: item.url,
    }));
  } catch (error) {
    console.error("Using fallback schedule due to error:", error);
    return fallbackData;
  }
}
