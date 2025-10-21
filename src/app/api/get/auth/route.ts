import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  _: NextRequest
): Promise<NextResponse> {
  const filePath = path.join(process.cwd(), "blog", `auth.json`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const content = JSON.parse(fileContent);  // JSON 파싱
  return NextResponse.json({ content });
}