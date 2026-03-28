import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "films.json");

export async function GET() {
  const data = await fs.readFile(filePath, "utf-8");
  return NextResponse.json(JSON.parse(data));
}

export async function PUT(request: Request) {
  const films = await request.json();
  await fs.writeFile(filePath, JSON.stringify(films, null, 2));
  return NextResponse.json({ success: true });
}

export async function POST(request: Request) {
  const newFilm = await request.json();
  const data = await fs.readFile(filePath, "utf-8");
  const films = JSON.parse(data);
  films.push(newFilm);
  await fs.writeFile(filePath, JSON.stringify(films, null, 2));
  return NextResponse.json({ success: true });
}

export async function DELETE(request: Request) {
  const { slug } = await request.json();
  const data = await fs.readFile(filePath, "utf-8");
  const films = JSON.parse(data).filter(
    (f: { slug: string }) => f.slug !== slug
  );
  await fs.writeFile(filePath, JSON.stringify(films, null, 2));
  return NextResponse.json({ success: true });
}
