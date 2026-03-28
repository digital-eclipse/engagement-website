import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "testimonials.json");

export async function GET() {
  const data = await fs.readFile(filePath, "utf-8");
  return NextResponse.json(JSON.parse(data));
}

export async function PUT(request: Request) {
  const testimonials = await request.json();
  await fs.writeFile(filePath, JSON.stringify(testimonials, null, 2));
  return NextResponse.json({ success: true });
}

export async function POST(request: Request) {
  const newItem = await request.json();
  const data = await fs.readFile(filePath, "utf-8");
  const testimonials = JSON.parse(data);
  newItem.id = String(Date.now());
  testimonials.push(newItem);
  await fs.writeFile(filePath, JSON.stringify(testimonials, null, 2));
  return NextResponse.json({ success: true });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const data = await fs.readFile(filePath, "utf-8");
  const testimonials = JSON.parse(data).filter(
    (t: { id: string }) => t.id !== id
  );
  await fs.writeFile(filePath, JSON.stringify(testimonials, null, 2));
  return NextResponse.json({ success: true });
}
