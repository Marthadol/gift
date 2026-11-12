import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const photos: Record<string, string> = { package: "package.jpeg", truck: "truck.jpeg" };
export async function GET(_request: Request, { params }: { params: Promise<{ photo: string }> }) {
  const { photo } = await params;
  if (!Object.hasOwn(photos, photo)) return new Response(null, { status: 404 });
  try {
    const data = await readFile(path.join(process.cwd(), "assets", "photos", photos[photo]));
    return new Response(data, { headers: { "Content-Type": "image/jpeg", "Cache-Control": "no-store" } });
  } catch { return new Response(null, { status: 404 }); }
}
