export async function getSchedule() {
  const res = await fetch(
    "https://api.sheetbest.com/sheets/ca35433a-4760-4b26-9453-9ef4b37f20f0",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch schedule data");
  }

  const data = await res.json();

  return data.map((item) => ({
    date: item.date,
    city: item.city,
    url: item.url,
  }));
}
