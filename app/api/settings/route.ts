import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "settings.json");

export async function GET() {
  const data = await fs.readFile(filePath, "utf-8");
  return NextResponse.json(JSON.parse(data));
}

export async function PUT(request: Request) {
  const settings = await request.json();
  await fs.writeFile(filePath, JSON.stringify(settings, null, 2));
  return NextResponse.json({ success: true });
}
